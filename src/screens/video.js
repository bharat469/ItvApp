import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MovieDetail} from '../redux/actions/movieAction';
import Header from '../props/header';
import LinearGradient from 'react-native-linear-gradient';

const Video = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {tv_group} = route.params;
  let mac = 'D1:F8:8C:90:76:E4';
  useEffect(() => {
    dispatch(MovieDetail(mac, tv_group));
  }, []);
  const mDetail = useSelector(state => state.Home.moviesDetail);
  console.log('details', mDetail);
  return (
    <LinearGradient
      style={styles.videoStyle}
      colors={['#212030', '#212030', '#50495B', '#fff']}>
      <Header />
      <View style={styles.pickMovie}>
        <View style={styles.pickmovie}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{tv_group}</Text>
          </View>
          <FlatList
            data={mDetail}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity>
                  <Text>{index}</Text>
                  <Text>{item.tv_title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Video;

const styles = StyleSheet.create({
  videoStyle: {
    flex: 1,
  },
});
