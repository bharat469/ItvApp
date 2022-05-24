import axios from 'axios';
import {API_KEY} from '../../helpers/apiKey';
import {ActionHomes} from '../slice/homeSlice';

export const MovieData = mac => {
  return async dispatch => {
    const movieData = async () => {
      console.log('reached inside function');
      await axios({
        method: 'POST',
        url: API_KEY + 'get_m3u_groups',
        data: {
          mac: mac,
        },
      }).then(response => {
        console.log('response data', response.data.result);
        try {
          dispatch(ActionHomes.movieData(response.data.result));
        } catch (e) {
          console.log('error of the api', e);
        }
      });
    };
    try {
      await movieData();
      console.log('data function worked');
    } catch (e) {
      console.log('error is', e);
    }
  };
};

export const MovieDetail = (mac, group) => {
  return async dispatch => {
    const detailData = async () => {
      console.log('entered the movie detail');
      await axios({
        method: 'POST',
        url: API_KEY + 'get_m3u_groups_content',
        data: {
          mac: mac,
          group: group,
        },
      }).then(response => {
        console.log('data of detail', response.data.result);
        try {
          dispatch(ActionHomes.DetailMovie(response.data.result));
        } catch (e) {
          console.log('error is ', e);
        }
      });
    };
    try {
      await detailData();
      console.log('detail fetched');
    } catch (e) {
      console.log('error is', e);
    }
  };
};
