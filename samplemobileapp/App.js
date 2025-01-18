import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from './page/Profile';
import Home from './page/Home';
import Student from './page/Student';
import AddStudent from './page/UpdateStu';


export default function App() {

  const Stack = createNativeStackNavigator()
  return (

    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='home' screenOptions={{headerTitleAlign:'center'}} >
            <Stack.Screen name='home' component={Home} options={{title:'Home'}}/> 
            <Stack.Screen name='profile' component={Profile} options={{title:'Profile'}}/> 
            <Stack.Screen name='student' component={Student} options={{title:'Profile'}}/> 
            <Stack.Screen name='addstudent' component={AddStudent} options={{title:'Add Student'}}/> 
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}



