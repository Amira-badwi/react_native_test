/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/login';
import Home from './src/screens/Home';
import SignUp from './src/screens/Sign-up';
import { Provider } from 'react-redux';
import store from './store/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductDetails from './src/components/productDetails';

const Stack = createNativeStackNavigator();
const userEmail:any =  AsyncStorage.getItem('userEmail');

function App(): React.JSX.Element {
  return (
    <>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={userEmail ? 'sign_up' : 'Home'} >
           <Stack.Screen name="sign_up" component={SignUp} />
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="photo_details" component={ProductDetails} />
           {/* headerShown to remove arrow back from home page */}
           <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
       </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </>
    
  );
}



export default App;
