import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DepotCredit from '../DepotCredit/DepotCredit';
import AddButton from '../sharedcomponents/buttons/addbutton';
import LabelComponent from './LabelComponent';
import {getAllfinance} from '../../Services/apiDenses';

const Finance = () => { 
  const [fetchedfinance, setFetchedfinance] = useState([]);
  const [creditSections, setCreditSections] = useState([
    {
      id: 1,
      dropdowns1: [{id: 1, selectedChoice: null}],
      dropdowns2: [{id: 1, selectedChoice: null}],
      value: '',
    },
  ]);

  const [debitSections, setDebitSections] = useState([
    {
      id: 1,
      dropdowns1: [{id: 1, selectedChoice: null}],
      dropdowns2: [{id: 1, selectedChoice: null}],
      value: '',
    },
  ]); 
  useEffect(() => {
    
  const fetchfinance = async () => {
    const response = await getAllfinance();
    setFetchedfinance(response);
    // map the response to get the finsubcategoryname
    const filtredfinance = response.filter(
      finance => finance.financeName );  
      const subfinance =filtredfinance.flatMap(finance => 
        finsubcategory2 
      )
      setCreditSections( 
        setCreditSections(prevSections =>
          prevSections.map(section => ({
            ...section,
            dropdowns1: filtredfinance.map(finance => ({
              id: finance.id,
              selectedChoice: finance.financeName,
            })),
          }))
        ) 
        //add finsubcategory2 into the second dropdown  
         

      
      );


        //add finsubcategory2 into the second dropdown 


        )

  }

    
  }, [])
  

  const handleAddCreditSection = () => {
    setCreditSections([
      ...creditSections,
      {
        id: creditSections.length + 1,
        dropdowns1: [{id: 1, selectedChoice: null}],
        dropdowns2: [{id: 1, selectedChoice: null}],
        value: '',
      },
    ]);
  };

  const handleAddDebitSection = () => {
    setDebitSections([
      ...debitSections,
      {
        id: debitSections.length + 1,
        dropdowns1: [{id: 1, selectedChoice: null}],
        dropdowns2: [{id: 1, selectedChoice: null}],
        value: '',
      },
    ]);
  };

  const handleDropdown1Change = (setSections, sectionId, dropdownId, value) => {
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

  const handleDropdown2Change = (setSections, sectionId, dropdownId, value) => {
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

  const handleValueChange = (setSections, sectionId, value) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId ? {...section, value} : section,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <LabelComponent style={styles.label} name="Finances" />

      {/* CREDIT SECTIONS */}
      {creditSections.map(section => (
        <DepotCredit
          key={`credit-${section.id}`}
          dropdowns1={section.dropdowns1}
          dropdowns2={section.dropdowns2}
          onDropdown1Change={(dropdownId, value) =>
            handleDropdown1Change(
              setCreditSections,
              section.id,
              dropdownId,
              value,
            )
          }
          onDropdown2Change={(dropdownId, value) =>
            handleDropdown2Change(
              setCreditSections,
              section.id,
              dropdownId,
              value,
            )
          }
          value={section.value}
          onValueChange={value =>
            handleValueChange(setCreditSections, section.id, value)
          }
          name={'Crédit'}
        />
      ))}

      <AddButton onPress={handleAddCreditSection} text="Add Crédit" />

      {/* DEBIT SECTIONS */}
      {debitSections.map(section => (
        <DepotCredit
          key={`debit-${section.id}`}
          dropdowns1={section.dropdowns1}
          dropdowns2={section.dropdowns2}
          onDropdown1Change={(dropdownId, value) =>
            handleDropdown1Change(
              setDebitSections,
              section.id,
              dropdownId,
              value,
            )
          }
          onDropdown2Change={(dropdownId, value) =>
            handleDropdown2Change(
              setDebitSections,
              section.id,
              dropdownId,
              value,
            )
          }
          value={section.value}
          onValueChange={value =>
            handleValueChange(setDebitSections, section.id, value)
          }
          name={'Débit'}
        />
      ))}

      <AddButton onPress={handleAddDebitSection} text="Add Débit" />
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
