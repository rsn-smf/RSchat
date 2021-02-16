import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';
import ChatItem from './ChatItem';

const Chatting = ({dataChat}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        {dataChat.map((row, i) => {
          return (
            <View key={i}>
              <Text style={styles.date}>{row.date}</Text>
              {row.data.map((row2, i2) => (
                <ChatItem
                  key={i2}
                  text={row2.message}
                  isMe={row2.isMe}
                  photo={row2.photo}
                />
              ))}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  date: {
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    fontSize: 11,
    paddingBottom: 20,
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
