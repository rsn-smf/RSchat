import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Gap, List, Searcher} from '../../components';
import {colors} from '../../utils';

const Messages = () => {
  return (
    <View style={styles.page}>
      <Searcher title="Messages" />
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

export default Messages;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
  },
});
