import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import HeaderComponent from '../components/sharedcomponents/HeaderComponent';
import Ammount from '../components/sharedcomponents/Ammount';
import DatePeacker from '../components/sharedcomponents/DatePeacker';
import Account from '../components/sharedcomponents/Account';
import Finance from '../components/sharedcomponents/Finance';
import Media from '../components/sharedcomponents/Media/Media';
import Description from '../components/sharedcomponents/Description';
import Category from '../components/sharedcomponents/Category';

const DepensesScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <ScrollView 
          nestedScrollEnabled={true}  
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} 
        >
          <HeaderComponent title="Dépense" />
          <Ammount type="depense" />
          <DatePeacker />
          <Category />
          <Description />
          <Account />
          <Finance />
          <Media />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sauvegarder</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(95, 191, 156, 1)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DepensesScreen;
