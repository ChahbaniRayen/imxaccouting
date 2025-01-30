import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import DropDownListe from '../sharedcomponents/DropDownListe';
import LabelComponent from '../sharedcomponents/LabelComponent';

const DepotCredit = ({
  dropdowns1,
  dropdowns2,
  onDropdown1Change,
  onDropdown2Change,
  value,
  onValueChange,
  name,
}) => {
  return (
    <View style={styles.container}>
      <LabelComponent name={name} />

      <View style={styles.row}>
        {dropdowns1.map(dropdown => (
          <View key={dropdown.id} style={styles.dropdownContainer}>
            <DropDownListe
              SetSelectedChoice={val => onDropdown1Change(dropdown.id, val)}
              placeholder={`Account ${dropdown.id}`}
            />
          </View>
        ))}

        {dropdowns2.map(dropdown => (
          <View key={dropdown.id} style={styles.dropdownContainer}>
            <DropDownListe
              SetSelectedChoice={val => onDropdown2Change(dropdown.id, val)}
              placeholder={`Option ${dropdown.id}`}
            />
          </View>
        ))}
      </View>

      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        value={value}
        onChangeText={onValueChange}
        placeholder="Entrez une valeur"
        maxLength={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dropdownContainer: {
    width: '48%',
  },
  textInput: { 
    width:300,
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#F8F9FA', 
    alignContent:'center',
  },
});

export default DepotCredit;
