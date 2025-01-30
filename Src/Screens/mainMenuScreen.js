import React, { useState,useContext } from 'react';
import {View,Text,StyleSheet, SafeAreaView,TextInput} from 'react-native';
import ExecuteButton from '../Components/confirmButton';
import BackGround from '../Components/mainMenuBackground';
import { getWeatherByCity } from '../Components/api';
import { WeatherContext } from '../Context/weatherContext';
const MainMenuScreen = ({navigation}) => {
  const { setLocation, fetchWeatherData } = useContext(WeatherContext);
  const [city, setCity] = useState('');
  console.log('Rendering MainMenuScreen');
 
  const handleButtonPress = async () => {
    try {
      const response = await fetchWeatherData(city);
      if (response.success) {
       // setWeatherData(response.data);
        setLocation(city);
        navigation.navigate('Weather');
      } else {
        console.error('Error fetching weather data:', response.error);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };
    return (
      <SafeAreaView style={styles.safeArea}>
        <BackGround>
        <View style={styles.viewStyle}>   
          <Text style={styles.titleText}>Find the Weather in your city!</Text>
          <TextInput
          style={styles.input}
          onChangeText={(text) => setCity(text)}
          placeholder="Enter City"
          value = {city}
          />
          <ExecuteButton
          onPress={handleButtonPress}
          style={styles.button}
          />
         
        </View>
        </BackGround>
      </SafeAreaView>
    );
  };
  
const styles = StyleSheet.create({
    viewStyle:{
         flex:1,
         justifyContent:'flex-start',
         //backgroundColor:"green"
    },
    button: {
      marginTop: 100, // Add space between image and button
      alisnself:'center',
    },
    safeArea:{
        flex: 1,
    },
    titleText:{
        paddingBottom:100,
        color: 'blue',
        fontSize: 50,
        textAlign: 'center',
        //justifyContent:"flex-start",
        fontWeight:'bold',

    },
    input:{
      height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10, 
    width: '80%', 
    alignSelf: 'center',
    },
});
export default MainMenuScreen;