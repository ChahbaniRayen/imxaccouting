import {RouteProp} from '@react-navigation/core';
import * as React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

export function LoginScreen({navigation}) {
  const [email, setEmail] = React.useState('');

  const handleLogin = () => {
    if (email) {
      navigation.navigate('OTPVerifyScreen', {email});
    }
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: '#FFFFFF', flexDirection: 'column'},
      ]}>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: 'rgba(95, 191, 156, 1)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: 343,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
