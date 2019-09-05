import React from 'react';
import {Text,View,Image} from 'react-native';

const MainWeather = ({icon,temp,description}) =>{
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}} 
                  style={{height:120,width:140}}/>
          <Text style={{fontSize:39,color:'#fff'}}>{temp}</Text>
          <Text style={{fontSize:26,color:'#fff'}}>{description}</Text>
        </View>
    )
}

export default MainWeather