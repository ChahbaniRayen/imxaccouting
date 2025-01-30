import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import LabelComponent from './LabelComponent';

const Description = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <LabelComponent name="Description" />
      <TextInput
        style={styles.textInput}
        placeholder="Entrez votre description ici..."
        placeholderTextColor="#aaa"
        multiline
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {  
    zIndex:10,
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  textInput: {
    flex: 1,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 150,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default Description;
