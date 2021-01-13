import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {IconSearch} from '../../assets/icon';
import {colors, fonts} from '../../utils';
import {Gap} from '../../components';

const Messages = () => {
  return (
    <View style={styles.page}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Messages</Text>
      </View>
      <Gap width={10} />
      <View style={styles.containerSearch}>
        <IconSearch />
        <TextInput placeholder="Search" style={styles.search} />
      </View>
      <View style={styles.people}>
        <View style={styles.person}></View>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  containerTitle: {
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },
  containerSearch: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  search: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    marginLeft: 20,
  },
  people: {},
  person: {
    width: 90,
    height: 130,
    elevation: 1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    // backgroundColor: 'red',
  },
});
