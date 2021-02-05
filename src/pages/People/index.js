import React from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors, fonts} from '../../utils';
import {Gap, Searcher} from '../../components';
import {IllPhotoBot} from '../../assets';

const Person = () => {
  return (
    <TouchableOpacity style={styles.person}>
      <Image style={styles.image} source={IllPhotoBot} />
      <Text style={styles.name}>Nairobi Putri</Text>
      <Text style={styles.status}>status</Text>
    </TouchableOpacity>
  );
};

const People = () => {
  return (
    <View style={styles.page}>
      <Searcher title="People" />
      <Gap height={10} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
        </View>
      </ScrollView>
    </View>
  );
};

export default People;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
  },
  container: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  person: {
    width: 90,
    height: 130,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.05,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginBottom: 14,
  },
  status: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[600],
    fontSize: 12,
  },
  name: {
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 12,
  },
});
