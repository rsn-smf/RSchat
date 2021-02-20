import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';
import {useForm} from '../../hooks';
import {Fire} from '../../config';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((user) => {
        console.log('user ---->', user);

        // Signed in
        // ...
      })
      .catch((error) => {
        console.log(error);
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ..
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Register" />
      <Gap height={30} />
      <View style={styles.form}>
        <Input
          label="Full Name"
          value={form.fullName}
          onChangeText={(value) => setForm('fullName', value)}
        />
        <Gap height={24} />
        <Input
          label="Email Address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={24} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
        />
        <Gap height={40} />
        <Button title="Continue" onPress={onContinue} />
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
