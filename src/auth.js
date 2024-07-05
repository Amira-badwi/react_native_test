import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { profileData } from '../store/Action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const signUp = ( dispatch, navigation, email, password) => {
  if (!email || !password) {
    Alert.alert('enter data');
  } else {
    auth().createUserWithEmailAndPassword(email , password).then( async()=>{
      Alert.alert("Sign up Successfuly!")
      dispatch(profileData(email)) ;
      await AsyncStorage.setItem('userEmail', email);
      const userEmail = await AsyncStorage.getItem('userEmail');
      console.log("userEmail" , userEmail);
      navigation.navigate("Home") ;
    }).catch(err=>{
      Alert.alert(err.message);
    })
  }
};

const signIn = ( dispatch , navigation ,email, password) => {
    if (!email || !password) {
      Alert.alert('enter data');
    } else {
      return auth()
        .signInWithEmailAndPassword(email, password)
        .then(async() => {
            Alert.alert("Login Successfuly!") ;
            dispatch(profileData(email)) ;
            await AsyncStorage.setItem('userEmail', email);
            const userEmail = await AsyncStorage.getItem('userEmail');
            console.log("userEmail" , userEmail);
            navigation.navigate("Home") ;

        }).catch(
          err => Alert.alert(err.code , err.message)
        )
    }
  };

  const signOut = async (navigation) => {
    try {
      Alert.alert(
        'Confirm Sign Out',
        'Are you sure you want to sign out?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Sign Out',
            onPress: async () => {
              // Perform sign out logic
              await auth().signOut();
              await AsyncStorage.removeItem('userEmail');
              navigation.navigate('Login'); // Replace with your login screen route name
            },
            style: 'destructive',
          },
        ],
        { cancelable: true }
      );
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
 const Auth ={
    signUp ,
    signIn,
    signOut
 } 
 export default Auth ;