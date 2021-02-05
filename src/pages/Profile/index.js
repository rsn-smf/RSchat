import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, List, Photo} from '../../components';
import {colors, fonts} from '../../utils';
import {IconLogout, IconProfile, IllPhotoNull} from '../../assets';

const Profile = () => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Gap height={40} />
      <Photo img={IllPhotoNull} />
      <Gap height={16} />
      <Text style={styles.name}>Syalsa Mahda</Text>
      <Gap height={2} />
      <Text style={styles.email}>orizkisn@gmail.com</Text>
      <Gap height={30} />
      <List
        icon={<IconProfile />}
        blurSubTitle
        title="Edit Profile"
        subTitle="Last Updated Yesterday"
      />
      <List
        icon={<IconLogout />}
        blurSubTitle
        title="Logout"
        subTitle="Exit RSchat"
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },
  email: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
  },
});
