import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MovieDetail} from '../redux/actions/movieAction';
import Header from '../props/header';
import LinearGradient from 'react-native-linear-gradient';
import {Poster} from '../helpers/image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Video = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {tv_group} = route.params;
  let mac = 'D1:F8:8C:90:76:E4';
  useEffect(() => {
    dispatch(MovieDetail(mac, tv_group));
  }, []);
  const mDetail = useSelector(state => state.Home.moviesDetail);

  const [movie, setMovie] = useState([]);

  const MovieSelector = id => {
    const setIt = mDetail.filter(item => {
      return item.id_content === id;
    });
    setMovie(setIt);
  };

  return (
    <LinearGradient
      style={styles.videoStyle}
      colors={['#212030', '#212030', '#50495B', '#fff']}>
      <Header />
      <View style={styles.pickMovies}>
        <View style={styles.pickmovie}>
          <LinearGradient style={styles.header} colors={['#C30BA4', '#DA3669']}>
            <TouchableOpacity>
              <AntDesign name="leftcircleo" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerText}>{tv_group}</Text>
            <TouchableOpacity>
              <AntDesign name="rightcircleo" size={24} color="#fff" />
            </TouchableOpacity>
          </LinearGradient>
          <FlatList
            data={mDetail}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.buttonView}
                  onPress={() => MovieSelector(item.id_content)}>
                  <Text style={styles.buttonIndex}>{index}</Text>
                  <Text style={styles.buttonTitle}>{item.tv_title}</Text>
                </TouchableOpacity>
              );
            }}
            style={{marginBottom: hp('9%')}}
          />
        </View>
        <View style={styles.definationScreen}>
          {movie.map((item, index) => {
            return (
              <View key={index} style={styles.PosterShow}>
                <View style={styles.homeMainPoster}>
                  <Image source={Poster} style={styles.posterHeight} />
                  <View style={styles.mainView}>
                    <Text style={styles.posterTitle}>{item.tv_title}</Text>
                    <View style={styles.secondView}>
                      <Text style={styles.posterDate}>{item.created_at}</Text>
                      <Text style={styles.posterLang}>{item.tv_language}</Text>
                    </View>
                    <Text style={styles.mainPara}>
                      An ex-MI6 agent steals a hard drive with top secret
                      information to carry out a vendetta on Bond's overseer, M.
                      Bond must face his past in a bid to try and save M.
                    </Text>
                    <View style={styles.posterView}>
                      <TouchableOpacity style={styles.posterButon}>
                        <Text style={styles.posterBtnText}>Watch Trailer</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.posterButon}
                        onPress={() =>
                          navigation.navigate('VideoPlayers', {
                            url: item.tv_media,
                          })
                        }>
                        <Text style={styles.posterBtnText}>Watch Now</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
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
  pickmovie: {
    padding: 12,
    width: wp('40%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#1D1C2C',
    left: wp('2%'),
    height: hp('78%'),
    borderRadius: 12,
  },
  pickMovies: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  header: {
    padding: 12,
    alignItems: 'center',
    width: wp('38%'),
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerText: {
    color: '#fff',
    fontSize: hp('3%'),
    fontWeight: '700',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#1D1C2C',
    borderRadius: 22,
    padding: 12,
  },
  buttonIndex: {
    fontSize: hp('3%'),
    color: '#fff',
    margin: 6,
  },
  buttonTitle: {
    fontSize: hp('3%'),
    color: '#fff',
    margin: 6,
  },
  PosterShow: {
    padding: 12,
    left: wp('3%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#1D1C2C',
  },
  posterHeight: {
    width: wp('55%'),
    height: hp('40%'),
  },
  mainView: {
    height: hp('35.5%'),
    width: wp('55%'),
    backgroundColor: '#FD8628',
    padding: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  posterTitle: {
    color: '#fff',
    fontSize: hp('3.4%'),
    fontWeight: '700',
  },
  secondView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  posterDate: {
    color: '#fff',
    fontSize: hp('2.8%'),
    fontWeight: '600',
  },
  posterLang: {
    color: '#fff',
    fontSize: hp('2.8%'),
    fontWeight: '600',
  },
  mainPara: {
    color: '#fff',
    fontSize: hp('2.8%'),
    fontWeight: '600',
  },
  posterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  posterButon: {
    borderWidth: 2,
    borderColor: '#fff',
    margin: 6,
    padding: 9,
    borderRadius: 22,
  },
  posterBtnText: {
    fontSize: hp('2.4%'),
    color: '#fff',
  },
});
