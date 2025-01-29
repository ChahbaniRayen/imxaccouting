import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import LabelComponent from './LabelComponent';
import DropDownListe from './DropDownListe';
import AddButton from '../sharedcomponents/buttons/addbutton';

const Account = () => {
  const [dropdowns, setDropdowns] = useState([{id: 1, selectedChoice: null}]);

  const handleAddDropdown = () => {
    setDropdowns([
      ...dropdowns,
      {id: dropdowns.length + 1, selectedChoice: null},
    ]);
  };

  const handleDropdownChange = (id, value) => {
    const updatedDropdowns = dropdowns.map(dropdown =>
      dropdown.id === id ? {...dropdown, selectedChoice: value} : dropdown,
    );
    setDropdowns(updatedDropdowns);
  };

  return (
    <View style={styles.container}>
      <LabelComponent name="Account" />
      {dropdowns.map(dropdown => (
        <View key={dropdown.id} style={styles.dropdownContainer}>
          <DropDownListe
            SetSelectedChoice={value =>
              handleDropdownChange(dropdown.id, value)
            }
            placeholder={`Account ${dropdown.id}`}
          />
        </View>
      ))}
      <AddButton onPress={handleAddDropdown} text="Add Account" />
    </View>
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
  dropdownContainer: {
    width: '100%',
    marginBottom: 10,
  },
});

export default Account;
