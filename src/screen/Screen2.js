import React from 'react';
import { StyleSheet, Text, View ,Image,ScrollView,ImageBackground} from 'react-native';
import CityComponent from "../components/CityComponent";
import MainWeather from "../components/MainWeather"
import DescriptionList from "../components/DescriptionList"

export default class App extends React.Component {
  state ={
    weathers: [],
    windSpeed: 0,
    rain: 0,
    pressure: 0,
    temp: 0,
    icon: '',
    description: '',
    humidity: 0,
    cloudsAll: 0,
    max_temp: 0,
    min_temp: 0,
    bool: false,
    name: '',
  }
 componentDidMount=async()=>{
   await this.setState({
      weathers: this.props.navigation.getParam('weathers'),
      bool: true
    })
    await console.log(this.state.weathers);
    await this.network();
  }
  network=async()=>{
    await this.setState({
      //name: this.state.weathers.name,
      windSpeed: this.state.weathers.wind.speed,
      pressure: this.state.weathers.main.pressure,
      temp: this.state.weathers.main.temp,
      icon: this.state.weathers.weather.map((i)=>{return i.icon}),
      description: this.state.weathers.weather.map((i)=>{return i.description}),
     // rain: this.state.weathers.rain['3h'],
      humidity: this.state.weathers.main.humidity,
     cloudsAll: this.state.weathers.clouds.all,
      max_temp: this.state.weathers.main.temp_max,
      min_temp: this.state.weathers.main.temp_min
    })
  }

  render(){
    const {temp,
            icon,
            description,
            windSpeed,
            pressure,
            rain,
            humidity,
            cloudsAll,
            min_temp,
            max_temp,
            name} = this.state
    return (
      <ImageBackground source={require('../../assets/intro.jpg')} style={{width:'100%',height:'100%'}}>
      <View style={styles.container}>
        <CityComponent cityName={name} next={'Сегодня'}/>
        <View>
          <MainWeather temp={Math.ceil(temp)+' °C'} icon={icon} description={description}/>
          <DescriptionList 
          windSpeed={windSpeed} 
          pressure={pressure} 
          rain={rain}
          humidity = {humidity}
          cloudsAll = {cloudsAll}
          min_temp = {Math.trunc(min_temp)+' °C'}
          max_temp = {Math.ceil(max_temp)+' °C'}
          />
        </View>
      </View>
      </ImageBackground>
    );
  }
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
});
