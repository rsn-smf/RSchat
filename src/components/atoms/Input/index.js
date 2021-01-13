import React, {useState} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {fonts, colors} from '../../../utils';

const Input = ({label}) => {
  const [border, setBorder] = useState(colors.border.blur);
  const onFocusForm = () => {
    setBorder(colors.border.focus);
  };
  const onBlurForm = () => {
    setBorder(colors.border.blur);
  };
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    marginBottom: 6,
  },
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    padding: 12,
    borderRadius: 10,
  }),
});
