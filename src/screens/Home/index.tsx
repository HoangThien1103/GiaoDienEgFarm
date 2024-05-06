import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './style';

export default function Home() {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../assets/img/background.png')}
      style={styles.imageBG}>
      <Text style={{backgroundColor: 'yellow'}}>hi</Text>
    </ImageBackground>
  );
}
