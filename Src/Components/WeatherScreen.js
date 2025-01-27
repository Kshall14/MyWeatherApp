import React from 'react';
import {View,Text,StyleSheet, SafeAreaView,ImageBackground,ScrollView,Image,FlatList} from 'react-native';
import getBackgroundImage from './DynamicBackground';
const WeatherScreen = ({route})=>{
  const forecastData = route.params.weatherData;
  const currentWeather = forecastData.list[0]; // Get the current weather data
  const next24Hours = forecastData.list.slice(0, 8);
  const next5Days = forecastData.list.slice(0, 40);
  const days = [];
for (let i = 0; i < 5; i++) {
  const dayData = next5Days.slice(i * 8, (i + 1) * 8);
  const day = {
    day: new Date(dayData[0].dt * 1000).toLocaleString('en-US', { weekday: 'long' }),
    icon: dayData[0].weather[0].icon,
    lowTemp: Math.min(...dayData.map((data) => data.main.temp_min)),
    highTemp: Math.max(...dayData.map((data) => data.main.temp_max)),
  };
  days.push(day);
}
const backgroundImage = getBackgroundImage(currentWeather.weather[0].description);
  return (
    <View style={styles.viewStyle}>
        <ImageBackground source={backgroundImage} style={styles.viewStyle}>
      <Text style={styles.titleText}>{forecastData.city.name}</Text>
      <Text style ={styles.tempText}>{Math.round(currentWeather.main.temp)}°F</Text>
      <Text style = {styles.weatherDescription}>{currentWeather.weather[0].description}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center',paddingBottom:50 }}>
      <Text style ={styles.feelsLikeText}>H: {Math.round(currentWeather.main.temp_max)}°F     </Text>
      <Text style ={styles.feelsLikeText}>L: {Math.round(currentWeather.main.temp_min)}°F</Text>
      </View>

      <View style={styles.forecastContainer}>
      <FlatList
        data={next24Hours}
        renderItem={({ item }) => (
          <View style={styles.hourlyForecastContainer}>
            <Text style={styles.timeText}>{new Date(item.dt * 1000).toLocaleTimeString()}</Text>
            <Image source={{ uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }} style={styles.icon} />
            <Text style={styles.scrollBarTempText}>{Math.round(item.main.temp)}°F</Text>
          </View>
        )}
        keyExtractor={(item) => item.dt.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      </View>

      <View style={styles.dailyForecastContainer}>
      <Text style={styles.dailyForecastTitle}>5-Day Forecast</Text>
        <FlatList
          data={days}
          renderItem={({ item }) => (
            <View style={styles.dailyForecastItem}>
              <Text style={styles.dayText}>{item.day}</Text>
              <Image source={{ uri: `http://openweathermap.org/img/wn/${item.icon}@2x.png` }} style={styles.icon} />
              <Text style={styles.dailyForecastTempText}>L: {Math.round(item.lowTemp)}°F H: {Math.round(item.highTemp)}°F</Text>
            </View>
          )}
          keyExtractor={(item) => item.day}
        />
      </View>





      </ImageBackground>
    </View>
  
    );
};
const styles = StyleSheet.create({
    viewStyle:{
         flex:1,
         justifyContent:'flex-start',
         backgroundColor:"black"
    },
    tempText:{
        fontSize:80,
        fontWeight:'bold',
        color:'white',
        textAlign: 'center',
    },
    safeArea:{
        flex: 1,
    },
    titleText:{
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        justifyContent:"flex-start",
        fontWeight:'bold',
        paddingTop:50,
    },
    feelsLikeText:{
        color:'white',
        fontSize: 10,
        textAlign: 'center',
    },
    weatherDescription:{
        color:'white',
        textAlign: 'center',
        fontSize: 25,
    },
    hourlyForecastContainer: {
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        backgroundColor: 'grey',
        borderRadius: "50",
      },
      timeText: {
        fontSize: 20,
        color: 'white',
      },
      icon: {
        width: 30,
        height: 30,
      },
      scrollBarTempText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        textAlign: 'center',
      },
      foreCastContainter:{
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        height: 300,
        alignSelf: 'center',
        marginBottom: 20,
        overflow: 'scroll',
      },
      dailyForecastContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
        marginTop: 20,
      },
      dailyForecastItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
      },
      dayText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
      dailyForecastTempText: {
        fontSize: 18,
        color: 'white',
      },
      dailyForecastTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
      },

});
export default WeatherScreen;