// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './start'
import Grid from './src/view/grid'
import Label from './src/view/screen/label'
const Stack = createStackNavigator();

// const HomeScreen = ({ navigation }) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', { name: 'Jane' })
//       }
//     />
//   );
// };
// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };


export default function App() {
  
  return (

    <NavigationContainer>
      <Stack.Navigator initialParams="Label">
      <Stack.Screen name="Label" component={Label}  options={{ title: 'Welcome',headerShown: false }} />
        <Stack.Screen 
          name="Home"
          component={Start}
           options={{ title: 'Welcome',headerShown: false }}
        />
        <Stack.Screen name="Grid" component={Grid}  options={{ title: 'Welcome',headerShown: false }} />
       
      </Stack.Navigator>
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
