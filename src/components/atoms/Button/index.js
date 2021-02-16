import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import ButtonIcon from './ButtonIcon';

const Button = ({type, title, onPress}) => {
  if (type === 'icon') {
    return <ButtonIcon onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? colors.white : colors.primary,
    paddingVertical: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.05,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  }),
  title: (type) => ({
    fontFamily: fonts.primary[600],
    fontSize: 18,
    textAlign: 'center',
    color: type === 'secondary' ? colors.text.primary : colors.white,
  }),
});
