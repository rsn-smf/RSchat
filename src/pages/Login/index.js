import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {IconLogo} from '../../assets';
import {colors, fonts} from '../../utils';
import {Button, Gap, Input, Link} from '../../components';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logo}>
          <IconLogo />
        </View>
        <Text style={styles.title}>Let’s Sign In with your account</Text>
        <Input label="Email Address" />
        <Gap height={25} />
        <Input label="Password" />
        <Gap height={10} />
        <Link
          title="Forgot My Password"
          size={12}
          onPress={() => alert('cooming soon')}
        />
        <Gap height={55} />
        <Button
          title="Sign In"
          onPress={() => navigation.navigate('MainApp')}
        />
        <Gap height={15} />
        <Link
          title="Forgot My Password"
          size={16}
          align="center"
          onPress={() => alert('cooming soon')}
        />
        <Gap height={10} />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 40,
  },
  logo: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  title: {
    maxWidth: 200,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginBottom: 40,
  },
});
