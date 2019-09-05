import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const DescriptionList = ({
  windSpeed,
  rain,
  pressure,
  humidity,
  cloudsAll,
  min_temp,
  max_temp
      }) =>{ return(
        <View style={{flexDirection:'row'}}>
          <View>
            <View style={styles.table}><Text style={styles.text}>Минимальная температура </Text></View>
            <View style={styles.table}><Text style={styles.text}>Максимальная температура </Text></View>
            <View style={styles.table}><Text style={styles.text}>Атмосферное давление, hPa</Text></View>
            <View style={styles.table}><Text style={styles.text}>Влажность,%</Text></View>
            <View style={styles.table}><Text style={styles.text}>Скорость ветра, м/с</Text></View>
            <View style={styles.table}><Text style={styles.text}>Объем осадков за последние 3 часа </Text></View>
            <View style={styles.table}><Text style={styles.text}>Облачность,%</Text></View>
          </View>
          <View>
          <View style={styles.table}><Text style={styles.text}>{min_temp}</Text></View>
            <View style={styles.table}><Text style={styles.text}>{max_temp}</Text></View>
            <View style={styles.table}><Text style={styles.text}>{pressure}</Text></View>
            <View style={styles.table}><Text style={styles.text}>{humidity}</Text></View>
            <View style={styles.table}><Text style={styles.text}>{windSpeed}</Text></View>
            <View style={styles.table}><Text style={styles.text}>{rain}</Text></View>
            <View style={styles.table}><Text style={styles.text}>{cloudsAll}</Text></View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  table: {
    borderColor:'#fff',
    borderWidth:1,
    margin:5,
    height:35
  },
  text:{
    fontSize: 18,
    marginLeft: 3,
    color:'#fff'
  }
});


export default DescriptionList