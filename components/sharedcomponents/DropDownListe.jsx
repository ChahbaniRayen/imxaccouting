import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDownListe = ({ SetSelectedChoice, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Choice A', value: 'Choice_a' },
    { label: 'Choice B', value: 'Choice_b' },
  ]);
  const [searchText, setSearchText] = useState('');

  const handleAddChoice = () => {
    const trimmedText = searchText.trim();
    if (
      trimmedText !== '' &&
      !items.some(item => item.label.toLowerCase() === trimmedText.toLowerCase())
    ) {
      const newChoice = {
        label: trimmedText,
        value: trimmedText.toLowerCase().replace(/\s/g, '_'),
      };
      setItems(prevItems => [...prevItems, newChoice]);

      // Mise à jour de la valeur sélectionnée après un léger délai
      setTimeout(() => {
        setValue(newChoice.value);
        SetSelectedChoice(newChoice.value);
      }, 100);

      Alert.alert('Ajouté', `${trimmedText} a été ajouté à la liste.`);
      setSearchText('');
    }
  };

  return (
    <View style={[styles.wrapper, { zIndex: open ? 1000 : 1 }]}>
      <DropDownPicker
        listMode="SCROLLVIEW"
        open={open}
        value={value}
        items={[...items, { label: `Ajouter "${searchText}"`, value: 'add_option' }]}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable={true}
        searchPlaceholder="Rechercher ou ajouter..."
        placeholder={placeholder}
        style={styles.dropDown}
        dropDownContainerStyle={styles.dropDownContainer}
        onChangeSearchText={setSearchText}
        onSelectItem={(item) => {
          if (item.value === 'add_option') {
            handleAddChoice();
          } else {
            setValue(item.value);
            SetSelectedChoice(item.value);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    position: 'relative',
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
