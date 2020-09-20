import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const schedule = {
  title: "CS Courses for 2019-2020"
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bannerStyle}>{schedule.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerStyle: {
    fontSize: 32,
    color: '#888'
  }
});

export default App;


