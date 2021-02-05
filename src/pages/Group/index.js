import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Gap, List, Searcher} from '../../components';
import {colors} from '../../utils';

const Group = () => {
  return (
    <View style={styles.page}>
      <Searcher title="Group" />
      <Gap height={10} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </ScrollView>
    </View>
  );
};

export default Group;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
  },
});
