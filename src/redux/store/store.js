import {configureStore} from '@reduxjs/toolkit';
import {HomeReducer} from '../slice/homeSlice';

const Store = configureStore({
  reducer: {
    Home: HomeReducer.reducer,
  },
});

export default Store;
