import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const backGroundVideo = require('../../Assets/CloudsVideo.mp4');

const TestVideo = () => {
  return (
    <View style={styles.container}>
      <Video
        source={backGroundVideo}
        resizeMode="cover"
        repeat
        rate={1.0}
        style={styles.videoStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoStyle: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});

export default TestVideo;
