// components/Resultado.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const Resultado = ({ resultado }) => {
  return (
    <View style={styles.container}>
      <Text>{resultado}</Text>
    </View>
  );
};

export default Resultado;