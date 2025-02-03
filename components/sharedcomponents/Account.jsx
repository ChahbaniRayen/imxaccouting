import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import LabelComponent from './LabelComponent';
import DropDownListe from './DropDownListe';

const Account = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  return (
    <View style={styles.container}>
      <LabelComponent style={styles.label} name="Account" />
      <View style={styles.dropdownContainer}>
        <DropDownListe
          SetSelectedChoice={setSelectedChoice}
          placeholder="Select Account"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  label: {
    padding: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
    textAlign: 'left',
  },
  dropdownContainer: {
    padding: 10,
    marginBottom: 10,

    alignSelf: 'flex-start',
    width: '100%',
  },
});

export default Account;
