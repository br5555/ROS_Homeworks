
__author__ = 'Branko'

####Iimport library-e bitne za crtanje grafova
# numpy za matricne operacije i matematiku,
#  scipy za dataframeove i obradu "tablicnih" zapisa
# a matplotlib vizualizacija
# rospy za komunikaciju i prijenos informacija(feedback_x, feedback_y, ulazi za pojedini motor itd.)
import time
import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import spline
import rospy
from tic_tac_drone.msg import CustomPose
#napravimo razred potreban za povezivanje s ROS-om i prijnos poruka
 class Poruke:
#  radimo konstruktor razreda(u njemu se samo inicijaliziraju pocetne vrijednosti,
# kada u konstruktoru ili bilo kojoj metodi stavite npr. def __init__( signal_x=37191, signal_yaw=28282): -> to znaci ako prilikom pravljenja instance razreda npr RosPoruka = Poruka()
#i ne predamo nikakav argument to je isto ko da smo napravili RosPoruka = Poruka(signal_x=37191, signal_yaw=28282)
#svaki razred  automatski ima svog vlastitiog pokazivaca(to je ova rijec self) s kojim npr. komunicirate(izmjenjujete vrijednosti prebacujete iz metode u metodu itd) unutar tog istog razreda
#
 	def __init__(self, signal_x=0, signal_y=0, signal_z=0, signal_yaw=0):
 # queue_size je buffer odnosno koliko proslih poruka ce zapamtiti queue_size= 10 pamti zadnjih 10 poruka
 # queue_size = 93834792 pati 93834792  odnosno   sto manji buffer "svjeziji" podatci
 # ali ako je regulator trom imamo nagle skokove treba naci kompromis

		pub = rospy.Publisher("signal", UlazMotora, queue_size=1)#                                                                           ^^^
#                                                                                               ^^^^^^^^^^^^^         ____________          |. .|
# UlazMotora je vrsta poruke (Poruka od mamu poruka za baku, mama cita svoju postu tata svoju) |sanducic  BAKA|<-----|poruka mama| <------- | U |
#                                  _______________________________                             |______________|      |___________|           \|/   <- mama
# #  regulator(obraduje podatke)  <-  1 2 3 4 5 6 7 8 9 10 11 12 13   <- novi podatci (senzora)       | |                  ^                  |
#                                  _______________________________                                    | |                  |                 / \
#                                                   'signal_x' je naziv poruke                        | |               božićna čestitka(Naziv poruke)
#
#
#       #inicijalizacija vrijednosti
		self.signal_x = signal_x
		self.signal_y = signal_y
		self.signal_z = signal_z
		self.signal_yaw = signal_yaw
		self.feedback_x = 0
		self.feedback_y = 0
		self.feedback_z = 0
		self.feedback_yaw = 0
# 		                                                                                                                                ^^^
#                                                                                               ____________         ^^^^^^^^^^^^^     |. .|
# Feedback je vrsta poruke (Poruka za mamu poruka za tatu, mama cita svoju postu tata svoju)   |Tintilinic 1|------>|sanducic  tata|   | U |
#                                  _______________________________                             |____________|       |______________|    \|/   <- tata
# #  regulator(obraduje podatke)  <-  1 2 3 4 5 6 7 8 9 10 11 12 13   <- novi podatci (senzora)       ^                  | |             |
#                                  _______________________________                                    |                  | |            / \
#                                                   'signal_x' je naziv poruke              Tinitilinic casopis          | |
#       jednom kada se pretplatimo to je to uvijek smo pretplaceni (doživotno ili do bankrota izdavatelja)
#       self.x_feedback pokazivacem self(razreda Poruka) pozivamo metodu x_feedback(koja pomaze tati prilikom otpakiravanja Tintilinic casopisa)


		rospy.Subscriber("feedback", CustomPose, self.feedback)

# Mi štancamo poruke dok ne propadnemo(ne zgasimo ROS )


		while not rospy.is_shutdown():
			pub_x.publish(self.signal_x)
			pub_y.publish(self.signal_y)
			pub_z.publish(self.signal_z)
			pub_yaw.publish(self.signal_yaw)
#
#

## Obrađujemo poruku i osvježavamo vrijednosti jučerašnje novine bacamo objavljuemo današnje

    def feedback(self, data):
		self.feedback_x = data.x
		self.feedback_y = data.y
		self.feedback_z = data.z
		self.feedback_yaw = data.yaw
#
## getter i setter-i radi lakse dohvacanja pojedinih vrijednosti (nemoramo dereferencirat Rosporuka.feedback_x)
	def getX_feedback(self):
		return self.feedback_x

	def getY_feedback(self):
		return self.feedback_y

	def getZ_feedback(self):
		return self.feedback_z

	def getYaw_feedback(self):
		return self.feedback_yaw


class PID:
    # konstruktor razreda PID
    def __init__(self,K_pf_num,K_pf_den ,Kr=1.0, Ti=1.0, Td=1.0, v=10.0, Integrator_max=100.0, Integrator_min=0.0, T_dis = 0.01):

        print("K_pf_num = %r,K_pf_den = %r ,Kr = %r, Ti = %r, Td = %r, v = %r, Integrator_max = %r, Integrator_min = %r, T_dis = %r"%(K_pf_num,K_pf_den ,Kr, Ti, Td, v, Integrator_max, Integrator_min, T_dis))

        self.K_pf_num = K_pf_num
        self.K_pf_den = K_pf_den
        self.Kr = Kr
        self.Ti = Ti
        self.Td = Td
        self.v = v
        self.Integrator_max = Integrator_max
        self.Integrator_min = Integrator_min
        self.T_dis = T_dis

        # trebao polje kako bi mogli pratiti povijest
        self.error_prefilter = [0.0 ,0.0]
        self.error = [0.0 ,0.0, 0.0]
        self.u_p = 0.0
        self.u_i = [0.0 ,0.0, 0.0]
        self.u_d = [0.0 ,0.0]
        self.error_d = [0.0 ,0.0]
        self.set_point = 0.0



     # Rad regulatora
     def update(self, current_value):                 # + sumator     self.error[0]   __________   u_sum
    #                             ##self.set_point------->O------------------------> |regulator |------------------>
    #                                                     ^ -                        |__________|
    #                                                     |
    #                                                     current_value(vrijednost sa senzora)

        self.error[0] = self.set_point - current_value
        # print("error = %r", self.error[0])
        # self.error_prefilter[0]=self.set_point - current_value
        # self.error[0] = self.K_pf_num*self.error_prefilter[0] + K_pf_den*self.error[1]
        #
        #
        # self.error_d[0] = (self.error[0] - self.error[1])/self.T_dis

        #Obican K *e(t)
        self.u_p = self.Kr * self.error[0]


        #pogledaj sliku https://awwapp.com/s/6ff36c8f-b337-4f38-9e25-2bd8918aabdf/
        #kada sve uvrstis i dobijes razlomak podijeli brojnik  i nazivnik s najvecom potencijom z-a
        #rezultat usporedi s ovom slikom i dobit ces identicnu rekurzivnu jednadzbu
        #https://awwapp.com/s/8b3c9edb-4176-436b-becd-d807dbc6411c/
        #array[0]-sadanje stanje array[1]-proslo stanje  array[0]-pretproslo stanje
        self.u_i[0] = self.u_i[1] + ((self.Kr*self.T_dis)/(self.Ti))*(self.error[0]+self.error[1])/2.0



        #ista stvar druga jednadzba
        #pogledaj sliku https://awwapp.com/s/80ea8393-8960-42d2-bf3a-2874ad3a95e3/
        #kada sve uvrstis i dobijes razlomak podijeli brojnik  i nazivnik s najvecom potencijom z-a
        #rezultat usporedi s ovom slikom i dobit ces identicnu rekurzivnu jednadzbu
        #https://awwapp.com/s/8b3c9edb-4176-436b-becd-d807dbc6411c/
        #array[0]-sadanje stanje array[1]-proslo stanje  array[0]-pretproslo stanje
        self.u_d[0] = ((2.0* self.Td - self.v * self.T_dis )/(2.0* self.Td + self.v * self.T_dis ))*self.u_d[1] + ((2.0*self.Kr*self.v*self.Td)/(2.0*self.Td + self.v*self.T_dis))*(self.error[0]-self.error[1])


        #pogledaj sliku https://awwapp.com/s/50029dda-fdfb-4654-8c95-2eb2463ab6f5/
        #pogledaj sliku https://awwapp.com/s/565ded46-b97f-46a9-b77e-a897d7223976/
        #provjeri da li je signal veci od maksimalnog (motor ne moze ici iznad 100%) ako je vrati ga na 100%
        # if self.u_i[0] > self.Integrator_max:
        #     self.u_i[0] = self.Integrator_max

        #provjeri da li je signal minimalan(motor ne moze ici u kontra stranu vise od 100%) ako je vrati ga na -100%
        # elif self.u_i[0] > self.Integrator_min:
        #     self.u_i[0] = self.Integrator_min

        #osvježavanje stanja
        # trenutno imas iphone s5 a prije toga si imao s4 i s3 [s5,s4,s3]
        #kupis iphone s6 i sada lista toja zadnja tri mobitela glasi [s6,s5,s4]
        # self.error_prefilter[1]=self.error_prefilter[0]
        self.u_i[2] =  self.u_i[1] #proba koda-----------------------
        self.u_i[1] =  self.u_i[0]
        self.u_d[1] =  self.u_d[0]
        self.error[2] = self.error[1]#proba koda-----------------------
        self.error[1] = self.error[0]
        self.error_d[1] = self.error_d[0]

        u_sum = self.u_p + self.u_d[0] + self.u_i[0]
        #-------return self.u_i[0]
        return u_sum

    def setPoint(self, set_point):
            #kada dobijemo novu točku letenja moramo strae signale zaboravit odnosno krenut od nule ispočetka
            self.set_point = set_point
            self.error = [0.0 ,0.0, 0.0]
            self.u_p = 0.0
            self.u_i = [0.0 ,0.0, 0.0]
            self.u_d = [0.0 ,0.0]
            self.error_d = [0.0 ,0.0]
            # self.set_point = 0.0

    #radi lakse izmjene pojedinih vrijednosti
    def getSetPoint(self):
        return self.set_point

    def setKr(self, Kr):
            self.Kr = Kr

    def setTi(self, Ti):
            self.Ti = Ti

    def setTd(self, Td):
            self.Td = Td


    def setV(self, v):
            self.v = v

    def setT_dis(self, T_dis):
            self.T_dis = T_dis

    def setIntegrator_max(self, Integrator_max):
            self.Integrator_max = Integrator_max

    def setIntegrator_min(self, Integrator_min):
            self.Integrator_min = Integrator_min



class Model:

    #pokreni skriptu zoh.m u matlabu


    def __init__(self):
        self.ulazni_signal_x = [0.0,0.0,0.0]
        self.ulazni_signal_y = [0.0,0.0,0.0]
        self.ulazni_signal_z = [0.0,0.0,0.0]
        self.ulazni_signal_yaw = [0.0,0.0,0.0]

        self.izlazni_signal_x = [0.0,0.0,0.0]
        self.izlazni_signal_y = [0.0,0.0,0.0]
        self.izlazni_signal_z = [0.0,0.0,0.0]
        self.izlazni_signal_yaw = [0.0,0.0,0.0]



    #u commandnu liniju upisi dig_reg_x
    #enter
    #gledaj sliku i radi prema njoj https://awwapp.com/s/8b3c9edb-4176-436b-becd-d807dbc6411c/
    def ProcesX(self, signal_x):
        self.ulazni_signal_x[0]= signal_x
        self.izlazni_signal_x[0]= 1.965*self.izlazni_signal_x[1]-0.9653*self.izlazni_signal_x[2]+0.006499*self.ulazni_signal_x[0]+0.006423*self.ulazni_signal_x[1]

        self.ulazni_signal_x[2]=self.ulazni_signal_x[1]
        self.ulazni_signal_x[1]=self.ulazni_signal_x[0]
        self.izlazni_signal_x[2]=self.izlazni_signal_x[1]
        self.izlazni_signal_x[1]=self.izlazni_signal_x[0]

        return self.izlazni_signal_x[0]



    #u commandnu liniju upisi dig_reg_y
    #enter
    #gledaj sliku i radi prema njoj https://awwapp.com/s/8b3c9edb-4176-436b-becd-d807dbc6411c/
    def ProcesY(self, signal_y):
        self.ulazni_signal_y[0]= signal_y
        self.izlazni_signal_y[0]= 1.965*self.izlazni_signal_y[1]-0.9653*self.izlazni_signal_y[2]+0.006499*self.ulazni_signal_y[0]+0.006423*self.ulazni_signal_y[1]

        self.ulazni_signal_y[2]=self.ulazni_signal_y[1]
        self.ulazni_signal_y[1]=self.ulazni_signal_y[0]
        self.izlazni_signal_y[2]=self.izlazni_signal_y[1]
        self.izlazni_signal_y[1]=self.izlazni_signal_y[0]

        return self.izlazni_signal_y[0]


    #u commandnu liniju upisi dig_reg_z
    #enter
    #gledaj sliku i radi prema njoj https://awwapp.com/s/8b3c9edb-4176-436b-becd-d807dbc6411c/
    def ProcesZ(self, signal_z):
        self.ulazni_signal_z[0]= signal_z
        self.izlazni_signal_z[0]= 1.947*self.izlazni_signal_z[1]-0.9466*self.izlazni_signal_z[2]+0.002865*self.ulazni_signal_z[0]+0.002813*self.ulazni_signal_z[1]

        self.ulazni_signal_z[2]=self.ulazni_signal_z[1]
        self.ulazni_signal_z[1]=self.ulazni_signal_z[0]
        self.izlazni_signal_z[2]=self.izlazni_signal_z[1]
        self.izlazni_signal_z[1]=self.izlazni_signal_z[0]

        return self.izlazni_signal_z[0]

    #u commandnu liniju upisi dig_reg_yaw
    #enter
    #gledaj sliku i radi prema njoj https://awwapp.com/s/8b3c9edb-4176-436b-becd-d807dbc6411c/
    def ProcesYaw(self, signal_yaw):
        self.ulazni_signal_yaw[0]= signal_yaw
        self.izlazni_signal_yaw[0]= self.izlazni_signal_yaw[1]+0.042*self.ulazni_signal_yaw[1]+0.000004806*self.ulazni_signal_yaw[2]

        self.ulazni_signal_yaw[2]=self.ulazni_signal_yaw[1]
        self.ulazni_signal_yaw[1]=self.ulazni_signal_yaw[0]
        self.izlazni_signal_yaw[2]=self.izlazni_signal_yaw[1]
        self.izlazni_signal_yaw[1]=self.izlazni_signal_yaw[0]

        return self.izlazni_signal_yaw[0]
if __name__ == '__main__':

    #Napravi instance razreda PID i pomocu konstrukora postavi na zadane vrijednosti
    #Vrijednosti prepisane iz matlaba
    #Integrator_max = max vrijednost izlaza iz integratora
    #Integrator_min = min vrijednost izlaza iz integratora
    PID_x = PID(K_pf_num=0.7148,K_pf_den=0.2852 ,Kr=7.0, Ti=35.0, Td=0.4, v=10.0, Integrator_max=5.0, Integrator_min=0.0, T_dis = 0.084)
    PID_y = PID(K_pf_num=0.7148,K_pf_den=0.2852,Kr=7.0, Ti=35.0, Td=0.4, v=10.0, Integrator_max=5.0, Integrator_min=0.0, T_dis = 0.084)
    PID_z = PID(K_pf_num=0.7198,K_pf_den=0.2802,Kr=10.0, Ti=30.0, Td=0.4, v=20.0, Integrator_max=5.0, Integrator_min=0.0, T_dis = 0.2439)
    PID_yaw = PID(K_pf_num=0.7123,K_pf_den=0.2877 ,Kr=10.0, Ti=20.0, Td=0.1, v=10.0, Integrator_max=5.0, Integrator_min=0.0, T_dis = 0.084)
	#Mjerenja = Poruke()
    Model_proces = Model();


    #pocetni uvjeti
    signal_x_main = 0.0
    signal_y_main =0.0
    signal_z_main =0.0
    signal_yaw_main =0.0
    PID_x.setPoint(1.0)
    PID_y.setPoint(5.0)
    PID_z.setPoint(7.0)
    PID_yaw.setPoint(81.68140899)


    #Vrt petlju do se ne priblizis referenci moramo postaviti prihvatlji
    # deadzone zbog diskretizacije da nam motor ne cupka(trza oko zadanog položaja)
    # jer se diskretizacijom gubi na preciznosti a dobiva na robusnosti


    #DOGOVOR JE DA IMAMO MANHATTAN KRETANJE

    while True:

        current_z = Mjerenja.getZ_feedback()
        if (PID_z.getSetPoint()-current_z)<0.01:
            break
        signal_z_main = PID_y.update(current_z)
        #saturation iz matlaba
        if signal_z_main > 25:
            signal_z_main = 25
        elif signal_z_main < -100:
            signal_z_main = -100
        #od -100% do 100 vec je
        #pogledaj sliku https://awwapp.com/s/a946c473-5c0f-43c5-b7ab-e153ac8c3a8c/
        signal_z_main =(2/125.0)*signal_z_main+0.6
        #od 0 % do 100%
        #primjer slika https://awwapp.com/s/eeafc932-7cff-4e63-b3f9-a07ea28bba55/
        # signal_z_main = signal_z_main*(1/125.0) +0.8
        Mjerenja(signal_x=0,signal_y=0,signal_z=signal_z_main,signal_yaw=0)


    while True:

        current_x = Mjerenja.getX_feedback()
        if (PID_x.getSetPoint()-current_x)<0.01:
            break
        signal_x_main = PID_x.update(current_x)
        #saturation iz matlaba
        if signal_x_main > 1:
            signal_x_main = 1
        elif signal_x_main < -1:
            signal_x_main = -1
        #od -100% do 100 vec je
        #prelikavanje s 0% na 100%
        #primjer slika https://awwapp.com/s/eeafc932-7cff-4e63-b3f9-a07ea28bba55/
        # signal_x_main = signal_x_main*0.5 +0.5
        Mjerenja(signal_x=signal_x_main,signal_y=0,signal_z=0,signal_yaw=0)

    while True:

        current_y = Mjerenja.getY_feedback()
        if (PID_y.getSetPoint()-current_y)<0.01:
            break
        signal_y_main = PID_y.update(current_y)
        #saturation iz matlaba
        if signal_y_main > 1:
            signal_y_main = 1
        elif signal_y_main < -1:
            signal_y_main = -1
        #od -100% do 100 vec je
        #prelikavanje s 0% na 100%
        #primjer slika https://awwapp.com/s/eeafc932-7cff-4e63-b3f9-a07ea28bba55/
        # signal_y_main = signal_y_main*0.5 +0.5
        Mjerenja(signal_x=0,signal_y=signal_y_main,signal_z=0,signal_yaw=0)







    ################
    ###PROBA SA MODELOM ZAKOMNETIRAJ!!!!!!!!!!!!!!!!!!!
    ########################




    END = 1000
    feedback = 0

    feedback_list_x = []
    feedback_list_y = []
    feedback_list_z = []
    feedback_list_yaw = []
    time_list = []
    setpoint_list_x = []
    setpoint_list_y = []
    setpoint_list_z = []
    setpoint_list_yaw = []

    i = 0
    while True:
        current_x =Model_proces.ProcesX(signal_x_main)
        current_y = Model_proces.ProcesX(signal_y_main)
        current_z = Model_proces.ProcesX(signal_z_main)
        current_yaw = Model_proces.ProcesX(signal_yaw_main)

        signal_x_main = PID_x.update(current_x)
        signal_y_main =PID_y.update(current_y)
        signal_z_main =PID_z.update(current_z)
        signal_yaw_main =PID_yaw.update(current_yaw)

        if signal_x_main > 1:
            signal_x_main = 1
        elif signal_x_main < -1:
            signal_x_main = -1

        if signal_y_main > 1:
            signal_y_main = 1
        elif signal_y_main < -1:
            signal_y_main = -1

        if signal_z_main > 25:
            signal_z_main = 25
        elif signal_z_main < -100:
            signal_z_main = -100

        if signal_yaw_main > 82:
            signal_yaw_main = 82
        elif signal_yaw_main < -82:
            signal_yaw_main = -82

        feedback_list_x.append(current_x)
        setpoint_list_x.append(signal_x_main)
        feedback_list_y.append(current_y)
        setpoint_list_y.append(signal_y_main)
        feedback_list_z.append(current_z)
        setpoint_list_z.append(signal_z_main)
        feedback_list_yaw.append(current_yaw)
        setpoint_list_yaw.append(signal_yaw_main)
        time_list.append(i)
        i = i+1

        if(i>1000):
            break

####################
######## Model X
    time_sm = np.array(time_list)
    time_smooth = np.linspace(time_sm.min(), time_sm.max(), 1000)
    feedback_smooth_x = spline(time_list, feedback_list_x, time_smooth)

    plt.plot(time_smooth, feedback_smooth_x)
    # plt.plot(time_list, setpoint_list_x)
    plt.xlim((0, 1000))
    plt.ylim((min(feedback_list_x)-0.5, max(feedback_list_x)+0.5))
    plt.xlabel('time (s)')
    plt.ylabel('PID_X (PV)')
    plt.title('TEST PID_X')

    # plt.ylim((1-0.5, 1+0.5))

    plt.grid(True)
    plt.show()


################################

####################
######## Model Y
    time_sm = np.array(time_list)
    time_smooth = np.linspace(time_sm.min(), time_sm.max(), 1000)
    feedback_smooth_y = spline(time_list, feedback_list_y, time_smooth)

    plt.plot(time_smooth, feedback_smooth_y)
    # plt.plot(time_list, setpoint_list_y)
    plt.xlim((0, 1000))
    plt.ylim((min(feedback_list_y)-0.5, max(feedback_list_y)+0.5))
    plt.xlabel('time (s)')
    plt.ylabel('PID_Y (PV)')
    plt.title('TEST PID_Y')

    # plt.ylim((1-0.5, 1+0.5))

    plt.grid(True)
    plt.show()


################################

####################
######## Model Z
    time_sm = np.array(time_list)
    time_smooth = np.linspace(time_sm.min(), time_sm.max(), 1000)
    feedback_smooth_z = spline(time_list, feedback_list_z, time_smooth)

    plt.plot(time_smooth, feedback_smooth_z)
    # plt.plot(time_list, setpoint_list_z)
    plt.xlim((0, 1000))
    plt.ylim((min(feedback_list_z)-0.5, max(feedback_list_z)+0.5))
    plt.xlabel('time (s)')
    plt.ylabel('PID_Z (PV)')
    plt.title('TEST PID_Z')

    # plt.ylim((1-0.5, 1+0.5))

    plt.grid(True)
    plt.show()


################################

####################
######## Model YAW
    time_sm = np.array(time_list)
    time_smooth = np.linspace(time_sm.min(), time_sm.max(), 1000)
    feedback_smooth_yaw = spline(time_list, feedback_list_yaw, time_smooth)

    plt.plot(time_smooth, feedback_smooth_yaw)
    # plt.plot(time_list, setpoint_list_x)
    plt.xlim((0, 1000))
    plt.ylim((min(feedback_list_yaw)-0.5, max(feedback_list_yaw)+0.5))
    plt.xlabel('time (s)')
    plt.ylabel('PID_YAW (PV)')
    plt.title('TEST PID_YAW')

    # plt.ylim((1-0.5, 1+0.5))

    plt.grid(True)
    plt.show()


################################