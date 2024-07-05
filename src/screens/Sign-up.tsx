import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../auth';
export default function SignUp({navigation}) {
  const [email,setEmail]=  useState("");
  const [password,setPassword]=  useState("");
  const dispatch =useDispatch();  
  // this function for sign up which take email & password as input data & dispatch to take the user name & navigation to redirect to home
    const handlesubmit =()=>{
    Auth.signUp( dispatch , navigation , email ,password);
    }
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>  sign up</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={email} onChangeText={text=>setEmail(text)} autoCorrect={false}
        autoCapitalize='none' keyboardType="email-address" />
            <TextInput style={styles.input} placeholder='PASSWORD' keyboardType="password"    value={password} onChangeText={text=>setPassword(text)} autoCorrect={false}
        autoCapitalize='none'/>
        </View>
        <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={handlesubmit}>
                <Text style={styles.buttonText}>Sign up</Text>
            </Pressable>
        </View>
             <Text style={styles.footerText}> Have Account?<Link to={{ screen: 'Login'}} style={styles.signup}>
                Log in</Link>
              </Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container : {
    alignItems : "center",
    paddingTop: 70,
  },
  image : {
    height : 160,
    width : 170
  },
  title : {
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 40,
    color : "black"
  },
  inputView : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :5
  },
  input : {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "black",
    borderWidth : 1,
    borderRadius: 7
  },
  rememberView : {
    width : "100%",
    paddingHorizontal : 50,
    justifyContent: "space-between",
    alignItems : "center",
    flexDirection : "row",
    marginBottom : 8
  },
  switch :{
    flexDirection : "row",
    gap : 1,
    justifyContent : "center",
    alignItems : "center"
    
  },
  rememberText : {
    fontSize: 13
  },
  forgetText : {
    fontSize : 11,
    color : "black"
  },
  button : {
    backgroundColor : "black",
    height : 45,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
  }, 
  buttonView :{
    width :"100%",
    paddingHorizontal : 50 ,
    marginTop : 20 
  },
  optionsText : {
    textAlign : "center",
    paddingVertical : 10,
    color : "gray",
    fontSize : 13,
    marginBottom : 6
  },
  mediaIcons : {
    flexDirection : "row",
    gap : 15,
    alignItems: "center",
    justifyContent : "center",
    marginBottom : 23
  },
  icons : {
    width : 40,
    height: 40,
  },
  footerText : {
    textAlign: "center",
    color : "gray",
    marginTop : 10
  },
  signup : {
    color : "black",
    fontSize : 13 
  }
})