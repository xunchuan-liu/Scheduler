import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


const getCourseNUmber = course => course.id.slice(1);

const Course = ({course}) => (
  <TouchableOpacity style={styles.courseButton}>
    <Text style={styles.courseText}>
      {`CS ${getCourseNUmber(course)}\n${course.meets}`}
    </Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({    
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

  export default Course;