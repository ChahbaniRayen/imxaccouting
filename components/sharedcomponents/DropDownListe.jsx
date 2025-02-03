import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-toast-message';

const DropDownListe = ({
  setSelectedChoice,
  placeholder,
  options = [],
  setData,
  // setNewItem,
}) => {
  console.log(options, 'options');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleAddChoice = () => {
    const trimmedText = searchText.trim();
    if (
      trimmedText !== '' &&
      !options.some(
        item => item?.label?.toLowerCase() === trimmedText?.toLowerCase(),
      )
    ) {
      const newChoice = {
        label: trimmedText,
        value: trimmedText.toLowerCase().replace(/\s/g, '_'),
      };

      setData(prevData => [...prevData, newChoice]);

      // setNewItem(newChoice);
      setValue(newChoice.value);
      setSelectedChoice(newChoice); // Pass the new company value back to ChoseCompanyScreen

      Toast.show({
        type: 'success',
        text1: 'Succès',
        text2: `Entreprise "${trimmedText}" ajoutée avec succès`,
      });
    }
  };

  return (
    <View style={[styles.wrapper, {zIndex: open ? 1000 : 1}]}>
      <DropDownPicker
        autoScroll={true}
        listMode="SCROLLVIEW"
        open={open}
        value={value}
        items={[...options, {label: `${searchText}`, value: 'add_option'}]}
        setOpen={setOpen}
        setValue={setValue}
        searchable={true}
        searchPlaceholder="Rechercher ou ajouter..."
        placeholder={placeholder}
        style={styles.dropDown}
        dropDownContainerStyle={styles.dropDownContainer}
        onChangeSearchText={setSearchText}
        onSelectItem={item => {
          if (item.value === 'add_option') {
            handleAddChoice();
          } else {
            setValue(item.value);

            setSelectedChoice(item); // Set selected choice
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
