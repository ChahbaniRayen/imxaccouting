import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';

const DatePeacker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const formatDate = date => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString('fr-FR', options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={formatDate(date)}
          editable={false}
        />
        <TouchableOpacity style={styles.icon} onPress={showDatepicker}>
          <Icon name="calendar" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  icon: {
    padding: 10,
  },
});

export default DatePeacker;
