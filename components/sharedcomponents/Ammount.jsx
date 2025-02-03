import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Ammount = ({type, onValueChange}) => {
  const [value, setValue] = useState('000.000');

  // Définition des couleurs du gradient en dehors de handleChange
  const gradientColors =
    type === 'dépense' ? ['#FFCBCB', '#FFFFFF'] : ['#9FEFD1', '#FFFFFF'];

  const handleChange = text => {
    setValue(text);
    onValueChange(text); // Mise à jour de `amount` dans DepensesScreen
  };

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={gradientColors}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <TextInput
          style={styles.text}
          keyboardType="numeric"
          value={value}
          onChangeText={handleChange}
          maxLength={10}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 20,
    marginTop: 25,
  },
  text: {
    fontSize: 60,
    fontWeight: '700',
    textAlign: 'center',
    padding: 20,
    margin: 5,
    width: 300,
    backgroundColor: 'transparent',
  },
});

export default Ammount;
