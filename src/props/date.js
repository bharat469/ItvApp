import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';

const DateProps = () => {
  const [day, setDay] = useState(null);
  const [date, setDate] = useState(null);
  const Dateset = () => {
    const today = new Date();
    var date = moment(today).format(' d MMMM YYYY');
    var day = moment(today).format('dddd');
    setDate(date);
    setDay(day);
  };

  useEffect(() => {
    Dateset();
  }, []);
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.textStyle}>{date}</Text>
      <Text style={styles.textStyle}>|| {day}</Text>
    </View>
  );
};

export default DateProps;

const styles = StyleSheet.create({
  textStyle: {
    color: '#fff',
    margin: 3,
  },
});
