import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../page/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Student from '../page/Student';


export default function NavBar({route}) {

  const Stack = createBottomTabNavigator() 
  return (
          <Stack.Navigator>
            <Stack.Screen name='home' component={Home} options={{title:'Home'}}/> 
            <Stack.Screen name='student' component={Student} options={{title:'Student'}}/> 
          </Stack.Navigator>

  );
}



