import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const ListeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={styles.headerText1}>iMaxeam </Text>
        <Text style={styles.headerText2}>Switch Campany </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'relative',
          width: '100%',
        }}>
        <TextInput style={styles.headerText}></TextInput>
        <Icon
          name="magnifying-glass"
          size={35}
          color="#000000"
          style={{position: 'absolute', right: 10, top: 19}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    // backgroundColor: '#B1B1B1', // A soft green color
    gap: 20,
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerText2: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6D6D6D',
  },
  headerText: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 8,
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default ListeHeader;
