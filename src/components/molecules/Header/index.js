import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconBack} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const HeaderPhoto = ({title, subTitle, photo, onPress}) => {
  return (
    <View style={styles.containerPhoto}>
      <Button icon={<IconBack />} onPress={onPress} />
      <Image style={styles.image} source={photo} />
      <Gap width={20} />
      <View style={styles.containerTitle}>
        <Text style={styles.titlePhoto}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const Header = ({title, subTitle, photo, onPress}) => {
  if (photo) {
    return (
      <HeaderPhoto
        title={title}
        subTitle={subTitle}
        photo={photo}
        onPress={onPress}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Button type="icon" onPress={onPress} />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Gap width={24} />
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
    // marginRight: 24,
    backgroundColor: colors.white,
  },
  containerPhoto: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.05,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  containerTitle: {
    flex: 1,
  },
  title: {
    color: colors.text.primary,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
  titlePhoto: {
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
  subTitle: {
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    fontSize: 14,
  },
  image: {
    marginLeft: 20,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});
