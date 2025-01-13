import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavBar from './components/navBar';
import Profile from './page/Profile';


export default function App() {

  const Stack = createNativeStackNavigator()
  return (

    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='navbar' screenOptions={{headerTitleAlign:'center'}} >
            <Stack.Screen name='navbar' component={NavBar} options={{title:'Student'}}/> 
            <Stack.Screen name='profile' component={Profile} options={{title:'Student'}}/> 
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}



