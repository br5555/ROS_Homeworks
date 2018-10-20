$ roscore
$ ctrl + shift + T
$ rosrun turtlesim turtlesim_node &
$ ctrl + shift + T
$ roscd 
$ cd ..
$ cd src
$ cd turtle_lawnmower
$ cd build
$ cmake ..
$ make
$ ctrl + shift + T
$ rosservice call turtle1/teleport_absolute 10.5 10.5 3.141592654
$ rosservice call clear
$ ctrl + shift + T
$ roscd
$ cd ..
$ catkin_make
$ rosrun turtle_lawnmower turtle_lawnmower_node 
