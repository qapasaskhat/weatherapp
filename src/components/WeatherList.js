import React from 'react';
import {Text,View,Image, TouchableOpacity} from 'react-native';

const WeatherList = ({onpress,data,cloudsAll,temp,description,icon}) =>{
    return(
        <TouchableOpacity onPress={onpress} style={{
          //backgroundColor:'green', 
          height:85, 
          borderColor:'#fff',
          borderWidth:1,
          borderTopWidth:0,}}>
              <View style={{
              //backgroundColor:'green',
              flexDirection: 'row',
              justifyContent:'space-between',
              alignItems:'center',
              }}>
              <View style={{marginLeft:5}}>
                <Text style={{fontSize:20,color:'#fff'}}>{data}</Text>
                <Text style={{fontSize:12,color:'#fff'}}>Облачность {cloudsAll} %</Text>
                <Text style={{fontSize:16,color:'#fff'}}>{description}</Text>
              </View>
              <View>
              <Image source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}} 
                    style={{height:60,width:70}}/>
              </View>
              <View style={{flexDirection:'column',marginRight:8}}>
                <Text style={{fontSize:24,color:'#fff'}}>{temp}</Text>
              </View>
              </View>
            <View style={{alignItems:'flex-end',marginRight:10,paddingTop:-15}}>
              <TouchableOpacity onPress={onpress}>
              <Text style={{color:'blue'}}>Подробнее..</Text>
              </TouchableOpacity>
            
            </View>    
          </TouchableOpacity>
    )
}

export default WeatherList