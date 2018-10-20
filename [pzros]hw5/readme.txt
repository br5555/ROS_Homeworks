1. Gmapping subscribed topics: tf(tf/tfMessage) and scan(sensor_msgs/LaserScan)

Naredbe:
	$ roslaunch stdr_launchers server_with_map_and_gui_plus_robot.launch
	novi terminal crtl+shift+T
	$ rosrun teleop_twist_keyboard teleop_twist_keyboard.py
cmd_vel:=robot0/cmd_vel
	novi terminal crtl+shift+T
	$ rosrun gmapping slam_gmapping scan:=/robot0/laser_0 _base_frame:="/robot0"  map:=/gmapping/map odom:=/world
	novi terminal crtl+shift+T
	$ roslaunch stdr_launchers  rviz.launch
	Add odaberemo topic gmapping , a stari map remove i pozicioniramo se u terminaul gdje je teleop_twist_keyboard.py i hodamo po mapi
