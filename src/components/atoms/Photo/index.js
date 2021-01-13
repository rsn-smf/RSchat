import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';
import {IconAddPhoto} from '../../../assets';

const Photo = ({img}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={img} />
      <IconAddPhoto style={styles.icon} />
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: colors.border.blur,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  icon: {
    position: 'absolute',
    right: 6,
    bottom: 8,
  },
});
