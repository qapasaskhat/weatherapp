import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons'

const CityComponent = ({cityName,next}) =>{
    return(
        <View style={{
            //backgroundColor:'red',
            flexDirection: 'row',
            justifyContent:'space-between',
            padding:5,borderBottomWidth:1,borderBottomColor:'#fff'}}>
            <View style={{marginLeft:5}}>
              <TouchableOpacity>
                <Text style={{fontSize:24,color:'#fff'}}>{cityName}</Text>
              </TouchableOpacity>
              <Text style={{fontSize:14,color:'#fff'}}>{next}</Text>
            </View>
          </View>
    )
}

export default CityComponent