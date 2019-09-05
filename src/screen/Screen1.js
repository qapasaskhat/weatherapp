import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView,ImageBackground} from 'react-native';
import { connect } from "react-redux";
import { fetchWeather} from "../../api/actions/cityAction"
import CityComponent from ".././components/CityComponent"
import WeatherList from "../components/WeatherList"

const mapStateToProps = state => ({
  weathers: state.weathers.items,
  loading: state.weathers.loading,
  error: state.weathers.error
});

class App extends React.Component {
  state = {
    city: ''
  }

  componentDidMount=async()=>{
      await this.setState({
         city: this.props.navigation.getParam('city'),
       })
    this.props.dispatch(fetchWeather(this.state.city));
    console.log();
  }
  _navigate=(arr,name)=>{
   // console.log(arr);
   let array = {arr,name}
    this.props.navigation.navigate('Weather', { weathers: arr })
    //this.props.navigation.navigate('Weather')
  }
  render(){
    const {error,loading,weathers}=this.props
    
    return(
      <ImageBackground source={require('../../assets/intro.jpg')} style={{width:'100%',height:'100%'}}>
      <View style={styles.container}>
        <CityComponent cityName={this.state.city} next={'Следующие 5 дней'}/>
        <ScrollView >
          {
           weathers
          .map((i,k)=>{
            if (i.dt_txt.slice(10,13)>11 && i.dt_txt.slice(10,13)<14)
              return(<WeatherList
                key={k} 
                cloudsAll={i.clouds.all}
                temp={Math.ceil(i.main.temp)+' °C'}
                data={i.dt_txt.slice(0,10)}
                description = {i.weather.map((i)=>{return i.description})}
                icon = {i.weather.map((i)=>{return i.icon})}
                onpress={()=>this._navigate(i,this.state.city)}  />
              )
          })
        }
        </ScrollView>
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

export default connect(mapStateToProps) (App)
