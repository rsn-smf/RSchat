import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';
import {IconSearch} from '../../../assets';

const Searcher = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Gap width={10} />
      <View style={styles.containerSearch}>
        <IconSearch />
        <TextInput placeholder="Search" style={styles.search} />
      </View>
    </View>
  );
};

export default Searcher;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  containerTitle: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },

  containerSearch: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  search: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    marginLeft: 20,
    flex: 1,
  },
});
