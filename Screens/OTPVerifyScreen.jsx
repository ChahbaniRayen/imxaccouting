import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {verifyOTP} from '../Services/api';
import Toast from 'react-native-toast-message';

export function OTPVerifyScreen(props) {
  const {navigation, route} = props;
  const {email = ''} = route?.params || {}; // Vérifie si `route.params` existe
  // const {email} = route.params || {}; // Vérifie si `route.params` existe
  console.log('Email reçu dans OTPVerifyScreen:', email);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length > 1) {
      text = text.slice(-1);
    }

    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    if (text === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const verify = async () => {
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      Toast.show({
        type: 'error',
        text1: 'Veuillez entrer un code OTP valide.',
      });
      return;
    }

    try {
      console.log('Envoi de la requête OTP:', {email, otpValue}); // Log avant l'appel API
      const response = await verifyOTP(email, otpValue);
      console.log('Réponse du serveur:', response); // Voir ce qui est reçu

      if (response.success) {
        console.log('hereee');
        navigation.navigate('ChoseCompanyScreen');
      } else {
        Toast.show({
          type: 'error',
          text1: response.message || "Échec de la vérification de l'OTP",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la vérification de l'OTP:", error);
      Toast.show({
        type: 'error',
        text1: "Une erreur s'est produite",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={ref => (inputRefs.current[index] = ref)}
            style={styles.textInput}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={verify}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textInput: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#21A67C',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPVerifyScreen;
