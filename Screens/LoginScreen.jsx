import {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {getUserByEmail, sendOTP} from '../Services/api';
import Toast from 'react-native-toast-message';

export function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [succes, setSucces] = useState(false);

  const handleLogin = async () => {
    console.log('handle login');
    if (!email) {
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Email invalide',
      });
      return;
    }
    setLoading(true);
    try {
      const response = await getUserByEmail(email);
      const {success, message} = response;

      if (success) {
        const response = await sendOTP(email);
        const {success: successendotp, message} = response;
        if (successendotp) {
          Toast.show({
            type: 'success',
            text1: 'Code envoyé',
          });

          navigation.navigate('OTPVerifyScreen', {email});
        }
      } else {
        Toast.show({
          type: 'error',
          text1: message,
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Une erreur est survenue',
      });
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
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>{'Se connecter'}</Text>
          )}
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
