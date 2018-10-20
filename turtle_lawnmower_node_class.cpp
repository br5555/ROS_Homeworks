#include "ros/ros.h"
#include "geometry_msgs/Twist.h"
#include "turtlesim/Pose.h"

class TurtleMower
{
  ros::NodeHandle nh;
  ros::Subscriber sub;
  ros::Publisher pub;

public:
  TurtleMower()
  {
    sub = nh.subscribe("turtle1/pose", 1, &TurtleMower::turtleCallback, this);
    pub = nh.advertise<geometry_msgs::Twist>("turtle1/cmd_vel", 1);
  }

  ~TurtleMower()
  {
  }

  void turtleCallback(const turtlesim::Pose::ConstPtr& msg)
  {
  ROS_INFO("Turtle lawnmower pose: [%f, %f, %f]", msg->x, msg->y, msg->theta);

  geometry_msgs::Twist turtle_cmd_vel;

  turtle_cmd_vel.linear.x = 1;
  pub.publish(turtle_cmd_vel);
  }

};


int main(int argc, char **argv)
{
  ros::init(argc, argv, "turtle_lawnmower_node");

  TurtleMower turtle;

  ros::spin();

  return 0;
}

