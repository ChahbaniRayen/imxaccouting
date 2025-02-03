import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import DropDownListe from '../components/sharedcomponents/DropDownListe';
import {getCompanies, addCompany} from '../Services/api';
import Toast from 'react-native-toast-message';
import {useIsFocused} from '@react-navigation/native';

const ChoseCompanyScreen = ({navigation}) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [oldComapnies, setOldComapnies] = useState([]);
  const [companies, setCompanies] = useState([]);
  // const [newCompany, setNewCompany] = useState(null);

  const isFOcused = useIsFocused();
  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await getCompanies();
      if (response?.success && response.companies) {
        const formattedCompanies = response.companies.map(company => ({
          label: company.name,
          value: company._id,
        }));
        setCompanies(formattedCompanies);
        setOldComapnies(formattedCompanies);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Erreur',
          text2: response.message || 'Erreur réseau',
        });
      }
    };

    fetchCompanies();
  }, [isFOcused]);

  const handleValidation = async () => {
    const response = await addCompany(selectedChoice.label);
    const {success, message, result} = response;

    if (success) {
      if (message === 'Company added successfully') {
        Toast.show({
          type: 'success',
          text1: 'Succès',
          text2: `Entreprise "${selectedChoice.label}" ajoutée avec succès`,
        });
      }

      navigation.navigate('DashbordScreen', {result});

      return;
    } else {
      Toast.show({
        type: 'error',
        text1: 'Erreur',
        text2: message || 'Erreur réseau',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Choose your company</Text>
      <DropDownListe
        setData={setCompanies}
        // setNewItem={setNewCompany}
        options={companies}
        setSelectedChoice={setSelectedChoice}
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
