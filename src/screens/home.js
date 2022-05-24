import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {MovieData} from '../redux/actions/movieAction';
import {Imagess} from '../helpers/image';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../props/header';
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  let mac = 'D1:F8:8C:90:76:E4';

  const data = useSelector(state => state.Home.movies);
  // const data = [{tv_group: 'text case'}];

  useEffect(() => {
    dispatch(MovieData(mac));
  }, []);
  console.log('data is', data);
  return (
    <LinearGradient
      colors={['#212030', '#212030', '#50495B', '#fff']}
      style={styles.linearGradient}>
      <ScrollView>
        <View>
          <Header />
        </View>
        <View style={styles.cardHome}>
          {data === null || undefined ? (
            <ActivityIndicator size="large" />
          ) : (
            data.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() =>
                    navigation.navigate('Video', {tv_group: item.tv_group})
                  }
                  key={index}>
                  <Image source={Imagess} style={styles.cardStyleImg} />
                  <View style={styles.overlay}>
                    <Text style={styles.textItem}>{item.tv_group}</Text>
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  touchable: {
    margin: 12,
  },

  cardHome: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: '#0000001a',
    // backgroundColor: '#000',
    width: wp('37.2%'),
    height: hp('34.5%'),
    borderRadius: 12,
    // bottom: hp('43.9%'),
    top: hp('9%'),
    left: wp('4%'),
  },
  textItem: {
    fontSize: hp('3.4%'),
    textAlign: 'center',
    color: '#fff',
    top: hp('12%'),
    fontWeight: '700',
  },
});
