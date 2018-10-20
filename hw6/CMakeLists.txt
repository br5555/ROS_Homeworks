cmake_minimum_required(VERSION 2.8.3)





find_package( OpenCV REQUIRED )
add_executable( DisplayImage src/objectDetection.cpp )
target_link_libraries( DisplayImage ${OpenCV_LIBS} )
