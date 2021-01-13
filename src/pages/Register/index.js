import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = () => {
  return (
    <View style={styles.page}>
      <Header title="Register" />
      <Gap height={30} />
      <View style={styles.form}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  form: {
    paddingHorizontal: 40,
  },
});
