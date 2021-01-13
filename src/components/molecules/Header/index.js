import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBack} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <IconBack style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 16,
    marginRight: 24,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
  icon: {},
});
