import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LabelComponent = ({name}) => {
  return (
    <View>
      <Text style={styles.label}>{name} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
});

export default LabelComponent;
