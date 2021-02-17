import React from 'react';
import {TouchableOpacity} from 'react-native';

const ButtonIcon = ({onPress, icon}) => {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
};

export default ButtonIcon;
