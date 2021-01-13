import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {Button, Gap, Header, Link, Photo} from '../../components';
import {IllPhotoNull} from '../../assets';

const UploadPhoto = () => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <Photo img={IllPhotoNull} />
          <Gap height={26} />
          <Text style={styles.title}>Syalsa Mahda</Text>
          <Gap height={3} />
          <Text style={styles.subTitle}>syalsa.mahda@gmail.com</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" size={16} align="center" />
          <Gap height={30} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 40,
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.primary,
  },
  subTitle: {
    fontFamily: fonts.primary.normal,
    fontSize: 18,
    color: colors.text.secondary,
  },
});
