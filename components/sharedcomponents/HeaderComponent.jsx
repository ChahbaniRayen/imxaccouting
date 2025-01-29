import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderComponent = ({ title, type, onClose }) => {
  const gradientColors =
  type === 'dépense' ? ['#9FEFD1', '#FFFFFF'] : ['#FFCBCB', '#FFFFFF']; 
    
  return (
    <LinearGradient 
      colors={gradientColors} 
      style={styles.header}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 0 }} 
    >
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Icon name="close" size={24} color="black" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  closeButton: {
    padding: 4,
  },
});

export default HeaderComponent;
