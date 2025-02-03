import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import DropDownListe from '../sharedcomponents/DropDownListe';
import LabelComponent from '../sharedcomponents/LabelComponent';

const DepotCredit = ({
  dropdowns1,
  dropdowns2,
  onDropdown1Change,
  onDropdown2Change,
  value,
  onValueChange, 
  setData1,
  setData2,
  name,
}) => {
  return (
    <View style={styles.container}>
      <LabelComponent name={name} />

      <View style={styles.row}>
        {/* Dropdown 1 */}
        <View style={styles.dropdownContainer}>
          <DropDownListe 
            setSelectedChoice={onDropdown1Change} // Utiliser la fonction passée
            options={dropdowns1}
            setData={setData1} // Permet d'ajouter des éléments dynamiquement

            placeholder="Sélectionnez une option" 
          />
        </View>

        {/* Dropdown 2 */}
        <View style={styles.dropdownContainer}>
          <DropDownListe
            setSelectedChoice={onDropdown2Change} // Utiliser la fonction passée
            options={dropdowns2} 
            setData={setData2} // Permet d'ajouter des éléments dynamiquement

            placeholder="Sélectionnez une option"
          />
        </View>
      </View>

      {/* Champ de saisie pour la valeur */}
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
    width: '100%',
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
    width: 300,
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#F8F9FA',
    alignContent: 'center',
  },
});

export default DepotCredit;