import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconForward, IllPhotoBot} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({title, subTitle, blurSubTitle, icon}) => {
  return (
    <View style={styles.list}>
      {icon ? icon : <Image style={styles.image} source={IllPhotoBot} />}

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle(blurSubTitle)}>{subTitle}</Text>
      </View>
      {icon ? (
        <IconForward />
      ) : (
        <View style={styles.badgeWrap}>
          <Text style={styles.time}>12:10</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  list: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.blur,
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },

  badgeWrap: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.white,
  },
  time: {
    fontSize: 10,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
    marginBottom: 2,
  },
  title: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  subTitle: (blurSubTitle) => ({
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: blurSubTitle ? colors.text.secondary : colors.text.primary,
  }),
});
