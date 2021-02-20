import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Gap, List, Searcher} from '../../components';
import {colors} from '../../utils';
import {Fire} from '../../config';

const Messages = ({navigation}) => {
  useEffect(() => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // var uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <View style={styles.page}>
      <Searcher title="Messages" />
      <Gap height={10} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <List
          title="Alucard"
          subTitle="wkwkkwkw iya aja daha"
          blurSubTitle
          onPress={() => navigation.navigate('Chat')}
        />
        <List
          title="Miya"
          subTitle="Times the winnes the handsome"
          onPress={() => navigation.navigate('Chat')}
        />
        <List
          title="Hanzo"
          subTitle="Nani koreng"
          blurSubTitle
          onPress={() => navigation.navigate('Chat')}
        />
        <List
          title="Nana"
          subTitle="Kocak lu cuyy"
          blurSubTitle
          onPress={() => navigation.navigate('Chat')}
        />
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
