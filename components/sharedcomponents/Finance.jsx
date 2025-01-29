import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DepotCredit from '../DepotCredit/DepotCredit';
import AddButton from '../sharedcomponents/buttons/addbutton';

const Finance = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      dropdowns1: [{id: 1, selectedChoice: null}],
      dropdowns2: [{id: 1, selectedChoice: null}],
      value: '',
    },
  ]);

  const handleAddSection = () => {
    setSections([
      ...sections,
      {
        id: sections.length + 1,
        dropdowns1: [{id: 1, selectedChoice: null}],
        dropdowns2: [{id: 1, selectedChoice: null}],
        value: '',
      },
    ]);
  };

  const handleDropdown1Change = (sectionId, dropdownId, value) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              dropdowns1: section.dropdowns1.map(dropdown =>
                dropdown.id === dropdownId
                  ? {...dropdown, selectedChoice: value}
                  : dropdown,
              ),
            }
          : section,
      ),
    );
  };

  const handleDropdown2Change = (sectionId, dropdownId, value) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              dropdowns2: section.dropdowns2.map(dropdown =>
                dropdown.id === dropdownId
                  ? {...dropdown, selectedChoice: value}
                  : dropdown,
              ),
            }
          : section,
      ),
    );
  };

  const handleValueChange = (sectionId, value) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId ? {...section, value} : section,
      ),
    );
  };

  return (
    <View style={styles.container}>
      {sections.map(section => (
        <DepotCredit
          key={section.id}
          dropdowns1={section.dropdowns1}
          dropdowns2={section.dropdowns2}
          onDropdown1Change={(dropdownId, value) =>
            handleDropdown1Change(section.id, dropdownId, value)
          }
          onDropdown2Change={(dropdownId, value) =>
            handleDropdown2Change(section.id, dropdownId, value)
          }
          value={section.value}
          onValueChange={value => handleValueChange(section.id, value)}
          name={'Crédit'}
        />
      ))}

      <AddButton onPress={handleAddSection} text="Add Crédit" />
      {sections.map(section => (
        <DepotCredit
          key={section.id}
          dropdowns1={section.dropdowns1}
          dropdowns2={section.dropdowns2}
          onDropdown1Change={(dropdownId, value) =>
            handleDropdown1Change(section.id, dropdownId, value)
          }
          onDropdown2Change={(dropdownId, value) =>
            handleDropdown2Change(section.id, dropdownId, value)
          }
          value={section.value}
          onValueChange={value => handleValueChange(section.id, value)}
          name={'Débit'}
        />
      ))}

      <AddButton onPress={handleAddSection} text="Add Débit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
});

export default Finance;
