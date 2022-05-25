import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';
import Video from '../screens/video';
import VideoPlayers from '../screens/videoPlayer';
const homeStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <homeStack.Navigator>
        <homeStack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <homeStack.Screen
          name="Video"
          component={Video}
          options={{headerShown: false}}
        />
        <homeStack.Screen
          name="VideoPlayers"
          component={VideoPlayers}
          options={{headerShown: false}}
        />
      </homeStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
