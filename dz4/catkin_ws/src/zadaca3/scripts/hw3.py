#!/usr/bin/env python

import rospy
import numpy
import math
from std_msgs.msg import String
from geometry_msgs.msg import Twist
from turtlesim.msg import Pose

class turtlesGame:
    def __init__(self, pose1, pose2):
        self.pose1 = pose1
        self.pose2 = pose2
        self.x=0
        self.y=8   
        self.x2=0
        self.y2=0
        rospy.Subscriber(self.pose1, Pose, self.pose_callback1)
        rospy.Subscriber(self.pose2, Pose, self.pose_callback2)

    def controller(self, cmd_vel):
        v = 2
        vel=Twist()
        win_str = String()
        pub = rospy.Publisher(cmd_vel,Twist,queue_size=1)
        pub_string = rospy.Publisher('chatter',String,queue_size=10)
        while not rospy.is_shutdown():
            distance = math.sqrt((self.x-self.x2)**2+(self.y-self.y2)**2)
            vel.linear.x = v
            vel.angular.z = numpy.random.random_integers(-5,5)
            pub.publish(vel)
            if distance < 1:
                 
                print("Bravo pobijeda!")
                exit(1)
            else:
                win_str.data = "Ajmo jos malo!"
            rospy.loginfo(win_str)
            pub_string.publish(win_str)
            rospy.sleep(1.0)
        
    def pose_callback1(self,data):
        self.x = data.x
        self.y = data.y


    def pose_callback2(self, data):
        self.x2 = data.x
        self.y2 = data.y

 
            
def main_part():
    Game = turtlesGame("/turtle1/pose", "/turtle2/pose")
    Game.controller("/turtle2/cmd_vel")


if __name__ == '__main__':
   
    rospy.init_node('zadaca2')
    try:
        mp = main_part()
    except rospy.ROSInterruptException: pass
