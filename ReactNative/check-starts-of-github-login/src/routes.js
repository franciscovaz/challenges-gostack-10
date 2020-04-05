import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const AppStack = createStackNavigator();
/* <AppStack.Navigator screenOptions={{ headerShown: false }}>  */
export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: '#7159c1' },
          headerTintColor: '#FFFFFF',
          headerTitleAlign: 'center',
        }}
      >
        <AppStack.Screen
          name="Home"
          options={{
            title: 'Utilizadores',
          }}
          component={Main}
        />
        <AppStack.Screen name="User" component={User} />
        <AppStack.Screen name="Repository" component={Repository} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
