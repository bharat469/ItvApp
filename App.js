/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import ReactNative, {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './src/navigation/navigation';
import {Provider} from 'react-redux';
import Store from './src/redux/store/store';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
