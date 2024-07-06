import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiSearchData } from '../../store/Action';

   function ProductsFavdata() {
    const [favphotos, setphotos] = useState([]);
    const photos = useSelector(state => state.Apisearch);
    let favList =[];
    async function fetchPhotos () {
       favList = await AsyncStorage.getItem('favlist');
       if (favList) {
        favList = JSON.parse(favList);}
        // Parse favList as an array
        const filteredPhotos = photos.filter(photo =>
            favList.includes(photo.id)
          );
          setphotos(filteredPhotos)
          console.log("Filtered Photos", filteredPhotos);

    };
  
    useEffect(  () => {
        fetchPhotos();
      
        }, []); // Empty dependency array to run once on mount
    
  const navigation = useNavigation();

  const handlePhotoPress = (photo) => {
    navigation.navigate('photo_details', { photo });
  };

  return (
    <>
      <ScrollView>
       
        <View style={styles.container}>
          {favphotos.map(photo => (
            <View key={photo.id} style={styles.photoContainer}>
              <TouchableOpacity   onPress={() => handlePhotoPress(photo)} >
                  <Image source={{uri: photo.src.medium}} style={styles.photo} />
                  <Text style={styles.photoTitle}>{photo.photographer}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  photoContainer: {
    marginBottom: 20,
    width: '40%',
  },
  photo: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom : 10
  },
  photoTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    backgroundColor: "white"
  },
});
export default ProductsFavdata ;
