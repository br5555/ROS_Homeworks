
__author__ = 'Branko'

import rospy
from tic_tac_drone.msg import CustomPose

 class Poruke:

 	def __init__(self, signal_x=0, signal_y=0, signal_z=0):

		self.pub = rospy.Publisher("signal", UlazMotora, queue_size=1)#                                                                           ^^^
		self.signal_x = signal_x
		self.signal_y = signal_y
		self.signal_z = signal_z

		self.feedback_x = 0
		self.feedback_y = 0
		self.feedback_z = 0
		self.feedback_yaw = 0

		rospy.Subscriber("feedback", CustomPose, self.feedback)

#
#
    def send_signals(self, signal_x=0, signal_y=0, signal_z=0):
        self.pub.publish(signal_x)
		self.pub.publish(signal_y)
		self.pub.publish(signal_z)

    def feedback(self, data):
		self.feedback_x = data.x
		self.feedback_y = data.y
		self.feedback_z = data.z
		self.feedback_yaw = data.yaw
#
	def getX_feedback(self):
		return self.feedback_x

	def getY_feedback(self):
		return self.feedback_y

	def getZ_feedback(self):
		return self.feedback_z

	def getYaw_feedback(self):
		return self.feedback_yaw


class PID:

    def __init__(self,K_pf_num,K_pf_den ,Kr=1.0, Ti=1.0, Td=1.0, v=10.0, Integrator_max=100.0, Integrator_min=0.0, T_dis = 0.01):


        self.K_pf_num = K_pf_num
        self.K_pf_den = K_pf_den
        self.Kr = Kr
        self.Ti = Ti
        self.Td = Td
        self.v = v
        self.Integrator_max = Integrator_max
        self.Integrator_min = Integrator_min
        self.T_dis = T_dis


        self.error_prefilter = [0.0 ,0.0]
        self.error = [0.0 ,0.0, 0.0]
        self.u_p = 0.0
        self.u_i = [0.0 ,0.0, 0.0]
        self.u_d = [0.0 ,0.0]
        self.error_d = [0.0 ,0.0]
        self.set_point = 0.0



     # Rad regulatora
     def update(self, current_value):


        self.error[0] = self.set_point - current_value

        self.u_p = self.Kr * self.error[0]
        self.u_i[0] = self.u_i[1] + ((self.Kr*self.T_dis)/(self.Ti))*(self.error[0]+self.error[1])/2.0
        self.u_d[0] = ((2.0* self.Td - self.v * self.T_dis )/(2.0* self.Td + self.v * self.T_dis ))*self.u_d[1] + ((2.0*self.Kr*self.v*self.Td)/(2.0*self.Td + self.v*self.T_dis))*(self.error[0]-self.error[1])





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
            self.set_point = set_point
            self.error = [0.0 ,0.0, 0.0]
            self.u_p = 0.0
            self.u_i = [0.0 ,0.0, 0.0]
            self.u_d = [0.0 ,0.0]
            self.error_d = [0.0 ,0.0]
            # self.set_point = 0.0

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




if __name__ == '__main__':


    PID_x = PID(K_pf_num=0.7148,K_pf_den=0.2852 ,Kr=7.0, Ti=35.0, Td=0.4, v=10.0, Integrator_max=5.0, Integrator_min=0.0, T_dis = 0.084)
    PID_y = PID(K_pf_num=0.7148,K_pf_den=0.2852,Kr=7.0, Ti=35.0, Td=0.4, v=10.0, Integrator_max=5.0, Integrator_min=0.0, T_dis = 0.084)
    PID_z = PID(K_pf_num=0.7198,K_pf_den=0.2802,Kr=10.0, Ti=30.0, Td=0.4, v=20.0, Integrator_max=5.0, Integrator_min=0.0, T_dis = 0.2439)
    PID_yaw = PID(K_pf_num=0.7123,K_pf_den=0.2877 ,Kr=10.0, Ti=20.0, Td=0.1, v=10.0, Integrator_max=5.0, Integrator_min=0.0, T_dis = 0.084)
	Mjerenja = Poruke()


    signal_x_main = 0.0
    signal_y_main =0.0
    signal_z_main =0.0
    signal_yaw_main =0.0
    PID_x.setPoint(1.0)
    PID_y.setPoint(5.0)
    PID_z.setPoint(7.0)
    PID_yaw.setPoint(81.68140899)



    while True:

        current_z = Mjerenja.getZ_feedback()
        if abs(PID_z.getSetPoint()-current_z)<0.01:
            signal_hover = signal_z_main
            break

        signal_z_main = PID_y.update(current_z)
        if signal_z_main > 25:
            signal_z_main = 25
        elif signal_z_main < -100:
            signal_z_main = -100

        signal_z_main = signal_z_main*(1/125.0) +0.8
        Mjerenja.send_signals(signal_x=0,signal_y=0,signal_z=signal_z_main)


    while True:

        current_x = Mjerenja.getX_feedback()
        if abs(PID_x.getSetPoint()-current_x)<0.01:
            break
        signal_x_main = PID_x.update(current_x)
        if signal_x_main > 1:
            signal_x_main = 1
        elif signal_x_main < -1:
            signal_x_main = -1
        signal_x_main = signal_x_main*0.5 +0.5
        Mjerenja.send_signals(signal_x=signal_x_main,signal_y=0,signal_z=signal_hover)

    while True:

        current_y = Mjerenja.getY_feedback()
        if abs(PID_y.getSetPoint()-current_y)<0.01:
            break
        signal_y_main = PID_y.update(current_y)
        if signal_y_main > 1:
            signal_y_main = 1
        elif signal_y_main < -1:
            signal_y_main = -1

        signal_y_main = signal_y_main*0.5 +0.5
        Mjerenja.send_signals(signal_x=0,signal_y=signal_y_main,signal_z=signal_hover)

        PID_z.setPoint(0.0)
        while True:

        current_z = Mjerenja.getZ_feedback()
        if abs(PID_z.getSetPoint()-current_z)<0.01:

            break

        signal_z_main = PID_y.update(current_z)
        if signal_z_main > 25:
            signal_z_main = 25
        elif signal_z_main < -100:
            signal_z_main = -100

        signal_z_main = signal_z_main*(1/125.0) +0.8
        Mjerenja.send_signals(signal_x=0,signal_y=0,signal_z=signal_z_main)





