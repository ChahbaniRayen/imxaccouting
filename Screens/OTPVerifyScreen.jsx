import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export function OTPVerifyScreen({navigation, route}) {
  const [otp, setOtp] = React.useState('');

  const verifyOTP = () => {
    if (otp.length === 6) {
      navigation.navigate('ChoseCompanyScreen');
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter OTP</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        maxLength={6}
      />
      <TouchableOpacity style={styles.button} onPress={verifyOTP}>
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
    marginBottom: 10,
    color: '#333333',
  },
  textInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'rgba(95, 191, 156, 1)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
