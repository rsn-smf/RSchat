import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts, colors} from '../../../utils';

const Link = ({title, size, align, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: (size, align) => ({
    fontSize: size,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
