import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScheduleScreen from './screens/ScheduleScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='ScheduleScreen'
          component={ScheduleScreen}
          options={{ title: 'Schedule' }}
        /> 
        <Stack.Screen name='CourseDetailScreen'
          component={CourseDetailScreen}
          options={{ title: 'Course Detail' }}
        />               
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


