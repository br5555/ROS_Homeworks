#! /usr/bin/env python

import rosbag

if __name__ == '__main__':
    bag = rosbag.Bag('hw4_.bag')
    
    x_a = [msg.pose.pose.position.x for (topic, msg, t) in bag.read_messages(topics=['/robot0/odom'])]
    y_a = [msg.pose.pose.position.y for (topic, msg, t) in bag.read_messages(topics=['/robot0/odom'])]
    t_t = [t.to_sec() for (topic, msg,t) in bag.read_messages(topics = ['/robot0/odom'])]
    prijeden_put = 0
    x_minus = x_a[0]
    y_minus = y_a[0]

    for (x_in, y_in) in zip(x_a, y_a):
        prijeden_put += ((x_in-x_minus)**2 + (y_in-y_minus)**2)**0.5
        x_minus = x_in
        y_minus = y_in


    srednja_brzina = (float)(prijeden_put)/(t_t[len(t_t)-1]-t_t[0])
