import {Link} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const AboutProduct = ({photo}) => {
  console.log('phot', photo);

  return (
    <View style={styles.container}>
      <Image source={{uri: photo.photo.src.large2x }} style={styles.photo} />
      <Text style={styles.photoTitle}> {photo.photo.photographer}</Text>

      {/* Display more details about the photo */}
    </View>
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
});
export default AboutProduct;
