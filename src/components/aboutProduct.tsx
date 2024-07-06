import React from 'react';
import {View, Image, StyleSheet, Text, Pressable, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AboutProduct = ({photo}) => {
   AsyncStorage.setItem('favlist', []);

   async function handleFav(ele) {
    try {
      let favlist = await AsyncStorage.getItem('favlist'); // Wait for AsyncStorage to return the value
      favlist = JSON.parse(favlist) || []; // Parse the JSON string, default to empty array if null or undefined
  
      let isExact = false;
  
      // Check if ele.id already exists in favlist
      for (let i = 0; i < favlist.length; i++) {
        if (favlist[i] === ele.id) {
          isExact = true;
          break;
        }
      }
  
      if (!isExact) {
        favlist.push(ele.id); // Add the new element's id to the array
        await AsyncStorage.setItem('favlist', JSON.stringify(favlist)); // Store the updated favlist back to AsyncStorage
        console.log("favlist updated:", favlist); // Log the updated favlist
      } else {
        console.log("Element already exists in favlist, not adding.");
      }
  
    } catch (error) {
      Alert.alert('Error handling favorite:', error);
      // Handle error appropriately, such as logging, showing an error message, etc.
      // It's crucial to handle errors to prevent unhandled promise rejections.
    }
  }
  
  return (
    <>
      <View style={styles.container}>
        <Image source={{uri: photo.photo.src.large2x}} style={styles.photo} />
        <Text style={styles.photoTitle}> {photo.photo.photographer}</Text>
      </View>
      <Pressable style={styles.favbutton} onPress={()=>handleFav(photo.photo)}>
        <Text style={styles.buttonText}>add to favourite</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  photo: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  photoTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  favbutton: {
    backgroundColor: 'red',
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
});
export default AboutProduct;
