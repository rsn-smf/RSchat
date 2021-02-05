import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {
  IconPeople,
  IconPeopleActive,
  IconMessages,
  IconMessagesActive,
  IconGroup,
  IconGroupActive,
  IllPhotoBot,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Group') {
      return active ? <IconGroupActive /> : <IconGroup />;
    }
    if (title === 'People') {
      return active ? <IconPeopleActive /> : <IconPeople />;
    }
    return <IconMessages />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      {title === 'Profile' ? (
        <Image style={styles.image} source={IllPhotoBot} />
      ) : (
        <>
          <Icon />
          <Text style={styles.text(active)}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.text.primary : colors.text.secondary,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    // marginTop: -20,
  },
});
