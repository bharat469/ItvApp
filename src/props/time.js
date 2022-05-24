import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';

const Time = () => {
  const [time, setTime] = useState(null);
  const TimeSet = () => {
    setInterval(() => {
      var date = moment().utcOffset('+05:30').format('hh:mm a');
      setTime(date);
    }, 1000);
  };

  useEffect(() => {
    TimeSet();
  });

  return (
    <View>
      <Text style={{color: '#fff'}}>{time}</Text>
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({});
