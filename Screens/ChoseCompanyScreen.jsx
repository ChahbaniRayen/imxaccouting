import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import DropDownListe from '../components/sharedcomponents/DropDownListe';

const ChoseCompanyScreen = ({navigation}) => {
  const [selectedChoice, SetSelectedChoice] = useState(null);

  const handleValidation = () => {
    if (selectedChoice) {
      // alert(`Company "${selectedCompany}" selected!`);
      navigation.navigate('DepensesScreen');
    } else {
      alert('Please select a company before proceeding.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Choose your company</Text>
      <DropDownListe
        SetSelectedChoice={SetSelectedChoice}
        placeholder="Select or add Company"
      />
      <TouchableOpacity style={styles.button} onPress={handleValidation}>
        <Text style={styles.buttonText}>Valider</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgba(95, 191, 156, 1)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChoseCompanyScreen;
