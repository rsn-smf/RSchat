import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';

const ChatItem = ({text, isMe, photo}) => {
  return (
    <View style={styles.container(isMe)}>
      {isMe && <Image style={styles.chatPhoto} source={photo} />}
      <View style={styles.chatContent(isMe)}>
        <View style={styles.chatBg(isMe)}>
          <Text style={styles.chatText(isMe)}>{text}</Text>
        </View>
        <Text style={styles.chatTime}>4:20 AM</Text>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: (isMe) => ({
    maxWidth: '80%',
    flexDirection: 'row',
    alignSelf: isMe ? 'flex-start' : 'flex-end',
    marginBottom: 15,
  }),
  chatPhoto: {
    marginRight: 12,
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignSelf: 'flex-end',
  },
  chatContent: (isMe) => ({
    alignItems: isMe ? 'flex-start' : 'flex-end',
  }),
  chatBg: (isMe) => ({
    backgroundColor: isMe ? colors.chat.secondary : colors.chat.primary,
    padding: 16,
    borderRadius: 20,
    borderBottomRightRadius: isMe ? 20 : 0,
    borderBottomLeftRadius: isMe ? 0 : 20,
  }),
  chatText: (isMe) => ({
    color: isMe ? colors.black : colors.white,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
  }),
  chatTime: {
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
    fontSize: 11,
  },
});
