import {Link} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import Auth from '../auth';
import { useDispatch } from 'react-redux';
export default function Login({navigation}) {
  const [click, setClick] = useState(false);
  const [email,setEmail]=  useState("");
  const [password,setPassword]=  useState("");
  const dispatch =useDispatch();

  // this function for login which take email & password as input data & dispatch to take the user name & navigation to redirect to home
  const handlesubmit =()=>{
  Auth.signIn(dispatch , navigation , email, password);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
      <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={email} onChangeText={text=>setEmail(text)} autoCorrect={false}
        autoCapitalize='none' keyboardType="email-address" />
      <TextInput style={styles.input} placeholder='PASSWORD' keyboardType="password"    value={password} onChangeText={text=>setPassword(text)} autoCorrect={false}
        autoCapitalize='none'/>
      </View>
      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch
            value={click}
            onValueChange={setClick}
            trackColor={{true: 'green', false: 'gray'}}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <View>
          <Pressable onPress={() => Alert.alert('Forget Password!')}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Pressable
          style={styles.button}
         onPress={handlesubmit}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </View>
      <Text style={styles.footerText}>
        Don't Have Account?
        <Link to={{screen: 'sign_up'}} style={styles.signup}>
          Sign Up
        </Link>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 70,
  },
  image: {
    height: 160,
    width: 170,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 40,
    color: 'black',
  },
  inputView: {
    gap: 15,
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
  },
  rememberView: {
    width: '100%',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
  },
  switch: {
    flexDirection: 'row',
    gap: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 13,
  },
  forgetText: {
    fontSize: 11,
    color: 'black',
  },
  button: {
    backgroundColor: 'black',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonView: {
    width: '100%',
    paddingHorizontal: 50,
  },
  optionsText: {
    textAlign: 'center',
    paddingVertical: 10,
    color: 'gray',
    fontSize: 13,
    marginBottom: 6,
  },
  mediaIcons: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 23,
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: 'center',
    color: 'gray',
  },
  signup: {
    color: 'black',
    fontSize: 13,
  },
});
