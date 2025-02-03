import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import HeaderComponent from '../components/sharedcomponents/HeaderComponent';
import Ammount from '../components/sharedcomponents/Ammount';
import DatePeacker from '../components/sharedcomponents/DatePeacker';
import Account from '../components/sharedcomponents/Account';
import Finance from '../components/sharedcomponents/Finance';
import Media from '../components/sharedcomponents/Media/Media';
import Description from '../components/sharedcomponents/Description';
import Category from '../components/sharedcomponents/Category';

const DepensesScreen = props => {
  const {title, type, id} = props.route.params;

  // États pour stocker les valeurs des composants enfants
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState('');
  const [account, setAccount] = useState(null);
  const [finance, setFinance] = useState([]);
  const [media, setMedia] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedPath, setSelectedPath] = useState([]);

  console.log(selectedPath, amount, date, 'selectedPathhhhhhhhh');
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Fonction pour sauvegarder les données
  const saveExpense = async () => {
    const expenseData = {
      amount,
      date,
      category,
      description,
      account,
      finance,
      type,
    };

    try {
      // Appel à l'API pour sauvegarder les données
      // await saveExpense(expenseData);
      console.log('appel api');
    } catch (error) {
      console.log('catch');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
          <HeaderComponent title={title} />
          <Ammount type={type} onValueChange={setAmount} />
          <DatePeacker onDateChange={setDate} />
          <Category
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            onCategorySelect={setCategory}
            setCategories={setCategories}
            categories={categories}
            id={id}
            selectedCategory={category}
            setSelectedPath={setSelectedPath}
            selectedPath={selectedPath}
          />
          <Description onTextChange={setDescription} />
          <Account onAccountSelect={setAccount} />
          <Finance onFinanceChange={setFinance} />
          <Media onMediaUpload={setMedia} />

          <TouchableOpacity style={styles.button} onPress={saveExpense}>
            <Text style={styles.buttonText}>Sauvegarder</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(95, 191, 156, 1)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DepensesScreen;
