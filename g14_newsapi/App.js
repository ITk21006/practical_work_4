import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import HomeScreen from './screens/HomeScreen';
import TechScreen from './screens/TechScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ showLabel: false, activeTintColor: '#ffc107'}}>
        <Tab.Screen name="Home" component={HomeScreen}
          // Adding icon
          options={{
            tabBarIcon: (props) => (
              <Icon type='material' name='home' color={props.color} />
            )
          }} />

        <Tab.Screen name="Tech" component={TechScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type='material' name='phone-android' color={props.color} />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
