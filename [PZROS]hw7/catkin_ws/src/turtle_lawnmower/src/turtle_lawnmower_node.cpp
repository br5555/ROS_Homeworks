//Required headers for the node
#include "ros/ros.h"
#include "geometry_msgs/Twist.h"//turtle's cmd_vel
#include "turtlesim/Pose.h"//reading turtle's position
#include <math.h> 
#include <stdbool.h>
class TurtleLawnmower
{
  ros::NodeHandle nh_;

  ros::Subscriber sub_;
  ros::Publisher pub_;
public:
  TurtleLawnmower();//class constructor
  ~TurtleLawnmower();//class destructor

  void turtleCallback(const turtlesim::Pose::ConstPtr& msg);

};

TurtleLawnmower::TurtleLawnmower()
{
	pub_ = nh_.advertise<geometry_msgs::Twist>("turtle1/cmd_vel", 1);
	sub_ = nh_.subscribe("turtle1/pose", 10, &TurtleLawnmower::turtleCallback, this);//referenca znak &

}
TurtleLawnmower::~TurtleLawnmower()
{}

void TurtleLawnmower::turtleCallback
(const turtlesim::Pose::ConstPtr& msg)
{
	geometry_msgs::Twist turtle_cmd_vel;
	
	if((msg->x)<0.5 && (msg->y)>0.2)
	
	{	if((fabs((roundf((fabs(msg->theta))*100)/100))>=3.14) && (fabs((roundf(fabs(msg->theta)*100)/100))<= 6.28)){
		turtle_cmd_vel.linear.x = 0.5;
		turtle_cmd_vel.angular.z = 4;
		}
		else{
		turtle_cmd_vel.linear.x= 0.5;
		}
		
	}
	else if((msg->x)>10.5 && (msg->y)<10.5 && (msg->y)>0.2)
	{	bool a = (((fmod((fabs((roundf((fabs(msg->theta))*10)/10))),6.2))>=0) && ((fmod((fabs((roundf((fabs(msg->theta))*10)/10))),6.3))<= 3.2)) || (((fmod((fabs((roundf((fabs(msg->theta))*10)/10))),6.2))>=3.2) && ((fmod((fabs((roundf((fabs(msg->theta))*10)/10))),6.3))<= 6.3));
		bool b = ((fmod((fabs((roundf((fabs(msg->theta))*10)/10))),6.3))>=0);
		bool c = ((fmod((fabs((roundf((fabs(msg->theta))*10)/10))),6.3))<= 3.14);
		if(a){
		turtle_cmd_vel.linear.x = 0.5;
		turtle_cmd_vel.angular.z = -4;/* 1*/
		}
		else{
		 turtle_cmd_vel.linear.x= 0.5;/*0.8*/
		}
		printf("Izraz -->%d, %d , %d", a,b,c);
	}
	
	else if((msg->x)>10.5 && (msg->y)<0.5){
		turtle_cmd_vel.angular.z = 0;
		turtle_cmd_vel.linear.x= 0;
	}
	else
	{
		
		turtle_cmd_vel.linear.x= 0.5;
	}
	/*if ((msg->x) < 0.2 ) && (abs((roundf((abs(msg->theta))*100)/100))< 3.14 || abs((roundf((abs(msg->theta))*10)/10)-6.28)< 3.14) //&& abs((roundf((abs(msg->theta))*10)/10)-3.14)< 3.14 
	{
		turtle_cmd_vel.linear.x = 1;
		turtle_cmd_vel.angular.z = 1;

	}
	else if((msg->x) > 10.8 ){
		turtle_cmd_vel.linear.x = 1;
		turtle_cmd_vel.angular.z = -1;
		
	}
	else{
		turtle_cmd_vel.linear.x = 1;
		turtle_cmd_vel.angular.z = 0;
	}*/
	pub_.publish(turtle_cmd_vel);
	ROS_INFO("Turtle lawnmower@[%f,%f,theta %f]", msg->x, msg->y, msg->theta);
}

int main(int argc, char **argv)
{
ros::init(argc, argv, "turtle_lawnmower_node");

TurtleLawnmower TtMower;

ros::spin();

return 0;

}


