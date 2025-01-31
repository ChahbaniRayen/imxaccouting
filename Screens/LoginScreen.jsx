import axios from 'axios';
import {RouteProp} from '@react-navigation/core';
import * as React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

export function LoginScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {
    if (!email) {
      Alert.alert('Erreur', 'Veuillez entrer votre email');
      return;
    }

    setLoading(true);
    try {
       console.log("email:",email); 
      const response = await  axios(
        `http://10.1.0.189:3000/api/users/getoneuser/${email}`
      );

      if (response.data) {
        navigation.navigate('OTPVerifyScreen', {email});
      } else {
        Alert.alert('Erreur', 'Utilisateur non trouvé');3         
      }
    } catch (error) { 
      console.error(error.message);

      Alert.alert('Erreur', "Impossible de vérifier l'utilisateur"); 
    } finally {
      setLoading(false);
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
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
          <Text style={styles.buttonText}>
            {loading ? 'Vérification...' : 'Se connecter'}
          </Text>
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
    alignSelf: 'center', 
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
    width: 300,
    alignItems: 'center', 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',  
  },
});
