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
        <List title="Alucard" subTitle="wkwkkwkw iya aja daha" />
        <List
          title="Miya"
          subTitle="Times the winnes the handsome"
          blurSubTitle
        />
        <List title="Hanzo" subTitle="Nani koreng" blurSubTitle />
        <List title="Nana" subTitle="Kocak lu cuyy" blurSubTitle />
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
