import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
const imageSource = require('../../Assets/GoButtonIcon.png')
const ExecuteButton = ({onPress}) =>{
    return(
        <TouchableOpacity onPress={onPress} style = {styles.circleButton}>
         <Image source={imageSource} style={styles.buttonImage} />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    circleButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginTop: 100,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 175,
    },
    buttonImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
      },
});
export default ExecuteButton;