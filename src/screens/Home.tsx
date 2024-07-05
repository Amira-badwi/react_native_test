import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Auth from '../auth';
import Productsdata from '../components/Productsdata';

const Home = ({navigation}) => {
  let profiledata=useSelector(state=>state.Auth.name) ;
const handlesubmit = ()=>{
  Auth.signOut(navigation)
}
  return (
  <>
    <View>
      <Text style={styles.title} >Hello {profiledata}</Text>
    </View>
   
    <Productsdata/>
    <View style={styles.buttonView}>
            <Pressable style={styles.button} onPress={handlesubmit}>
                <Text style={styles.buttonText}>Sign out</Text>
            </Pressable>
    </View>
  </>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 20,
    color: 'black',
  },
  button: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonView: {
    width: '100%',
    paddingHorizontal: 50,
  },
})
export default Home