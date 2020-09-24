import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import UserContext from '../UserContext';

import CourseList from '../components/CourseList';


const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
);


const ScheduleScreen = ({navigation}) => {
  const user = useContext(UserContext);  
  const canEdit = user && (user.role === 'admin');
  
  const [schedule, setSchedule] = useState({ title: '', courses: [] });

  const view = course => {
      navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
  };

  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    }
    fetchSchedule();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view} />      
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
  }  
});

export default ScheduleScreen;


