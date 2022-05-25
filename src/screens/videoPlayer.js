import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import Video from 'react-native-video';

import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const VideoPlayers = ({navigation, route}) => {
  const {url} = route.params;

  return (
    <View style={{flex: 1}}>
      <Video
        source={{
          uri: url,
        }}
        style={styles.mediaPlayer}
        controls={true}
        fullscreen={true}
      />
    </View>
  );
};

export default VideoPlayers;

const styles = StyleSheet.create({
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
    width: wp('100%'),
    height: hp('100%'),
  },
});
