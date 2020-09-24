import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserContext from './UserContext';

import ScheduleScreen from './screens/ScheduleScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import CourseEditScreen from './screens/CourseEditScreen';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={user}>
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
          <Stack.Screen name='CourseEditScreen'
            component={CourseEditScreen}
            options={{ title: 'Course Editor' }}     
          />          
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;


