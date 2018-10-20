#!/usr/bin/env python   
import rospy
from geometry_msgs.msg import Twist
from sensor_msgs.msg import LaserScan
import numpy
class Node1():
    def laser_callback(self, data):
     #   rospy.loginfo(rospy.get_caller_id() +"Color I see"+ "Range max = %r  Range_min=%r, %r----> %r", data.range_max, data.range_min, min(data.ranges), self.i )
        self.minimalno = min(data.ranges[:])
        self.i +=1
        if self.minimalno < self.tresh:
            
            self.cmd_vel.angular.z = 0.2
            
            self.cmd_vel.linear.x = 0
        else:
            
            self.cmd_vel.angular.z = 0
            self.cmd_vel.linear.x = 0.2

       #for j in range(data.ranges):
          # print("Printam ranges %r", data.ranges[j])
    #def laser_callback1(self, data):
        #rospy.loginfo(rospy.get_caller_id() +"Color I see")
    def __init__(self):
        self.minimalno = 10
        self.tresh =  0.3
         
        self.i = 0
        pub = rospy.Publisher("/robot0/cmd_vel",Twist,queue_size=10)
        self.cmd_vel = Twist()
        self.cmd_vel.angular.z = 0
        self.cmd_vel.linear.x = 0
        #self.cmd_vel.linear.x=1
        #if self.minimalno < self.tresh:
         #   self.cmd_vel.linear.x = 0
          #  self.cmd_vel.linear.y = -1
        #else:
         #   self.cmd_vel.linear.x = 1
          #  self.cmd_vel.linear.y = 0           
        
        rospy.Subscriber("/robot0/laser_0", LaserScan , self.laser_callback)

        #rospy.Subscriber("scan", LaserScan, self.laser_callback1)
        
        while not rospy.is_shutdown(): 
            pub.publish(self.cmd_vel)
            rospy.sleep(0.1)
            
            
if __name__ == '__main__':
    
    rospy.init_node('pyclass')
    try:
        Node1()
    except rospy.ROSInterruptException:
        pass
        
