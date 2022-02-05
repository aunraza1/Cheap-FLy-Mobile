import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from './index';
import {FONTS} from '../constants';
const Ratings = ({ratings}) => {
  let data = [];
  for (let i = 0; i < ratings; i++) {
    data.push(i);
  }
  return (
    <View style={styles.row}>
      {data &&
        data?.map((v, i) => {
          return <Text key={i} style={styles.text} text={'⭐'} />;
        })}
    </View>
  );
};
export default Ratings;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  text: {
    ...FONTS.Light14,
    textAlign: 'left',
  },
});
