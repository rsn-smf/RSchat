import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconLogo, IllChatting} from '../../assets';
import {Button} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.logoContainer}>
        <IconLogo />
      </View>
      <View style={styles.titleContainer}>
        <IllChatting />
        <Text style={styles.title}>
          Chat anytime, anywhere for free as we like
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <View style={{height: 15}}></View>
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 40,
    paddingTop: 30,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'flex-end',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 28,
    color: colors.text.primary,
    maxWidth: 300,
    marginTop: 20,
  },
});
