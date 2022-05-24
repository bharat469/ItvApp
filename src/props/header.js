import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Time from './time';
import DateProps from './date';
import {Logo} from '../helpers/image';
const Header = () => {
  return (
    <View style={styles.homeNavigation}>
      <Time />
      <Image source={Logo} style={styles.imageStyle} />
      <DateProps />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  imageStyle: {
    width: wp('20%'),
    height: hp('20%'),
  },
  homeNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
