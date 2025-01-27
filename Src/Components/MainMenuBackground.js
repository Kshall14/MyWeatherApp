import React from 'react';
import {ImageBackground,StyleSheet,View} from 'react-native';
import Video from 'react-native-video'
const backGroundImage = require('../../Assets/MainMenuBackGround.jpg');

const BackGround = ({children})=>{
    return(
        <View style = {styles.backgroundStyle}>
            <ImageBackground 
            source = {backGroundImage}
            style = {styles.backgroundImage}
            >
            {children}
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1, 
        resizeMode: 'cover',
        width: '100%',
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
})
export default BackGround;