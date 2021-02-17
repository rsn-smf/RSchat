import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {IconSend} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Tulis pesan untuk syalsa" style={styles.input} />
      <View style={styles.bgButton}>
        <Button icon={<IconSend />} />
      </View>
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    padding: 16,
    flexDirection: 'row',
    // alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: colors.input,
    padding: 14,
    borderRadius: 10,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
  bgButton: {
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  },
});
