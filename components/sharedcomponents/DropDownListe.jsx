import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDownListe = ({SetSelectedChoice, placeholder}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Choice A', value: 'Choice_a'},
    {label: 'Choice B', value: 'Choice_b'},
  ]);

  const [searchText, setSearchText] = useState('');

  const handleAddChoice = text => {
    const trimmedText = text.trim();
    if (
      trimmedText !== '' &&
      !items.some(
        item => item.label.toLowerCase() === trimmedText.toLowerCase(),
      )
    ) {
      const newchoice = {
        label: trimmedText,
        value: trimmedText.toLowerCase().replace(/\s/g, '_'),
      };
      setItems(prevItems => [...prevItems, newchoice]);
      setValue(newchoice.value);
      SetSelectedChoice(newchoice.value);
      Alert.alert('Ajouté', `${trimmedText} a été ajouté à la liste.`);
    }
  };

  const handleSearchTextChange = text => {
    setSearchText(text);

    if (text.endsWith(' ')) {
      handleAddChoice(text);
      setSearchText('');
    }
  };

  return (
    <View style={styles.wrapper}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable={true}
        placeholder={placeholder}
        searchPlaceholder="Rechercher ou ajouter..."
        onChangeValue={val => {
          SetSelectedChoice(val);
        }}
        onChangeSearchText={handleSearchTextChange}
        style={styles.dropDown}
        dropDownContainerStyle={styles.dropDownContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    
  },
  dropDown: {
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
  },
  dropDownContainer: {
    borderColor: '#CCCCCC',
  },
});

export default DropDownListe;
