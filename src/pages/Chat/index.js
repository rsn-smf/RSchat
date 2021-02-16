import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IllPhotoBot} from '../../assets';
import {Header, Chatting, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const data = [
  {
    date: 'Senin, 15 Febuari 2020',
    data: [
      {
        message:
          'Ibu dokter, apakah memakan jeruk tiap hari itu buruk ewewewewew?',
        time: '17:50',
        isMe: true,
        photo: IllPhotoBot,
      },
      {
        message: 'Oh tentu saja tidak karenajeruk itu sangat sehat...',
        time: '17:55',
        isMe: false,
        photo: IllPhotoBot,
      },
      {
        message: 'Baik ibu, terima kasih atas waktu dan ilmunya ...',
        time: '17:57',
        isMe: true,
        photo: IllPhotoBot,
      },
    ],
  },
  {
    date: 'Jumat, 20 Febuari 2020',
    data: [
      {
        message:
          'Ibu dokter, apakah memakan jeruk tiap hari itu buruk ewewewewew?',
        time: '17:50',
        isMe: true,
        photo: IllPhotoBot,
      },
      {
        message: 'Oh tentu saja tidak karenajeruk itu sangat sehat...',
        time: '17:55',
        isMe: false,
        photo: IllPhotoBot,
      },
      {
        message: 'Baik ibu, terima kasih atas waktu dan ilmunya ...',
        time: '17:57',
        isMe: true,
        photo: IllPhotoBot,
      },
    ],
  },
];

const Chat = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        photo
        title="React Native Indonesia"
        subTitle="27 online"
        photo={IllPhotoBot}
        onPress={() => navigation.goBack()}
      />
      <Gap height={20} />
      <Chatting dataChat={data} />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
