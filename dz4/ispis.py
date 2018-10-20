__author__ = 'Branko'

import time
import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import spline
text_file = open("error.txt", "r")

feedback_list_x = text_file.read().split(',')
print("%s", feedback_list_x[1])
time_list = []
feedback_list_x = feedback_list_x[:len(feedback_list_x)-1]
feedback_list_x = [float(x) for x in feedback_list_x]

print("%s",type(feedback_list_x[1]))
i = 0
while i< 1001:
    time_list.append(i)
    i = i+1
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



text_file.close()

