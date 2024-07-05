import React from 'react';
import { ScrollView } from 'react-native';
import {
  View,
  StyleSheet
} from 'react-native';
import AboutProduct from './aboutProduct';

const ProductDetails =({route})=>{
  var photo ="";
  photo=   route.params ;
    return(
 <>
    <ScrollView  style={{width:'100%',backgroundColor:'white'}}>
            <View style={{marginRight:'10px',marginLeft:'10px'}}>
                <AboutProduct photo={photo}/>
            </View>
    </ScrollView>
  </>
    )
}


export default  ProductDetails ;