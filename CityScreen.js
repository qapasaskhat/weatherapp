import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground } from 'react-native';


export default class App extends React.Component  {

  componentDidMount=()=>{
  }
  
  render(){
    return (
      <ImageBackground source={require('./assets/intro.jpg')} style={{width:'100%',height:'100%'}}>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text  style={styles.textStyle}>Выберите город</Text>
        </View>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home', { city: 'Almaty' })}} style={styles.view}>
          <Text style={styles.textStyle}>Almaty</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home', { city: 'Astana' })}} style={styles.view}>
          <Text style={styles.textStyle}>Astana</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home', { city: 'London' })}} style={styles.view}>
          <Text style={styles.textStyle}>London</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view:{
    margin:5,
    borderWidth:1,
    borderColor:'#fff',
    padding:10,
    backgroundColor:'#fff'
  },
  textStyle:{
    fontSize:20,
   // color:'#fff'
  }
});
