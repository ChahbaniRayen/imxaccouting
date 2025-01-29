import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddButton = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Text style={styles.addButtonText}>{text}</Text>
        <Icon name="plus-box" size={15} color="gray" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    marginTop: 20,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'baseline',
  },
  buttonContent: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  addButtonText: {
    marginRight: 8,
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddButton;
