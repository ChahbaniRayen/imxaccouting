import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Ammount = ({ type }) => {
  const [value, setValue] = useState('000.000');

  const gradientColors =
  type === 'dépense' ? ['#9FEFD1', '#FFFFFF'] : ['#FFCBCB', '#FFFFFF']; 

  return (
    <View style={styles.wrapper}>
      <LinearGradient 
        colors={gradientColors} 
        style={styles.container}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 0 }} 
      >
        <TextInput
          style={styles.text}
          keyboardType="numeric"
          value={value}
          onChangeText={text => setValue(text)}
          placeholder="Entrez une valeur"
          maxLength={10}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 20,
    marginTop: 25,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    margin: 5,
    backgroundColor: 'transparent', 
  },
});

export default Ammount;
