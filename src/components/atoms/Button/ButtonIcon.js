import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconBack} from '../../../assets';

const ButtonIcon = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconBack />
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({});
