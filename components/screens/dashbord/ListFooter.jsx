import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export const ListFooter = ({id}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={[styles.button, styles.greenButton]}
        onPress={() => {
          navigation.navigate('ApportsScreen', {
            id,
            title: 'Apport',
            type: 'apport',
          });
        }}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.redButton]}
        onPress={() => {
          navigation.navigate('DepensesScreen', {
            id,
            title: 'Dépense',
            type: 'dépense',
          });
        }}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopColor: '#ddd',
    // backgroundColor: '#F9F9F9',
    width: '100%',
  },
  button: {
    padding: 20,
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenButton: {
    backgroundColor: '#5FBF9C',
  },
  redButton: {
    backgroundColor: '#FF6347',
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
  },
});

export default ListFooter;
