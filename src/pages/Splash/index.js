import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconLogo} from '../../assets';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, []);

  return (
    <View style={styles.page}>
      <IconLogo style={styles.logo} />
      <Text style={styles.title}>RS chat</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 15,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
});
