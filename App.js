import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Text, View } from 'react-native';

const schedule = {
  title: "CS Courses for 2019-2020",
  courses: [
    {
      id: "F101",
      title: "Computer Science: Concepts, Philosophy, and Connections",
      meets: "MWF 11:00-11:50"
    },
    {
      id: "F110",
      title: "Intro Programming for non-majors",
      meets: "MWF 10:00-10:50"
    },
    {
      id: "F111",
      title: "Fundamentals of Computer Programming I",
      meets: "MWF 13:00-13:50"
    },
    {
      id: "F211",
      title: "Fundamentals of Computer Programming II",
      meets: "TuTh 12:30-13:50"
    }
  ]
};

const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title}</Text>
);

const CourseList = ({courses}) => (
  <ScrollView>
    <View style={styles.courseList}>
      {courses.map(course => <Course key={course.id} course={course}/>)}
    </View>  
  </ScrollView>
);

const getCourseNUmber = course => course.id.slice(1);

const Course = ({course}) => (
  <TouchableOpacity style={styles.courseButton}>
    <Text style={styles.courseText}>
      {`CS ${getCourseNUmber(course)}\n${course.meets}`}
    </Text>
  </TouchableOpacity>
);



const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} />      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  bannerStyle: {
    fontSize: 32,
    color: '#888'
  },
  courseList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  courseButton: {    
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#66b0ff'
  },
  courseText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  }
});

export default App;


