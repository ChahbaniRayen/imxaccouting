  import React, { useState, useEffect } from 'react';
  import { View, StyleSheet } from 'react-native';
  import DepotCredit from '../DepotCredit/DepotCredit';
  import AddButton from '../sharedcomponents/buttons/addbutton';
  import LabelComponent from './LabelComponent';  
  import { getAllfinacesDepenses } from '../../Services/apiDenses';

  const Finance = () => {
    const [creditSections, setCreditSections] = useState([]); 
    const [debitSections, setDebitSections] = useState([]); 
    const [fetchedFinance, setFetchedFinance] = useState([]); 
    const [finSubcategoryNames, setFinSubcategoryNames] = useState([]); 
    const [finSubcategory2Values, setFinSubcategory2Values] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false); 

    useEffect(() => {
      const fetchFinance = async () => {
        try {
          const response = await getAllfinacesDepenses();
          console.log('Fetched response:', JSON.stringify(response, null, 2));
    
          setFetchedFinance(response);
    
          const fetchedFinaceCategoryName = response
            .map(financeItem => financeItem.finances)
            .flat()
            .map(fin => fin.finsubcategoryname);
    
          const fetchedFinaceSubcategory2 = [
            ...new Set(
              response
                .map(financeItem => financeItem.finances)
                .flat()
                .map(fin => fin.finsubcategory2)
                .flat()
            ),
          ];
    
          console.log('Fetched subcategory names:', fetchedFinaceCategoryName);
          console.log('Fetched subcategory2 values:', fetchedFinaceSubcategory2);
    
          setFinSubcategoryNames(fetchedFinaceCategoryName);
          setFinSubcategory2Values(fetchedFinaceSubcategory2);
          setDataLoaded(true); 

          // Initialiser une section de crédit et une section de débit
          if (fetchedFinaceCategoryName.length > 0 && fetchedFinaceSubcategory2.length > 0) {
            setCreditSections([{
              id: 1,
              dropdowns1: fetchedFinaceCategoryName.map((name, index) => ({
                id: index + 1,
                label: name,
                value: name
              })),
              dropdowns2: fetchedFinaceSubcategory2.map((value, index) => ({
                id: index + 1,
                label: value,
                value: value
              })),
              value: '',
            }]);

            setDebitSections([{
              id: 1,
              dropdowns1: fetchedFinaceCategoryName.map((name, index) => ({
                id: index + 1,
                label: name,
                value: name
              })),
              dropdowns2: fetchedFinaceSubcategory2.map((value, index) => ({
                id: index + 1,
                label: value,
                value: value
              })),
              value: '',
            }]);
          }
        } catch (error) {
          console.error("Error fetching finance data", error);
        }
      };
    
      fetchFinance();  
    }, []); 
    const handleSetDropdown1Data = (newData) => {
      if (!newData || !Array.isArray(newData)) {
        console.error("handleSetDropdown1Data received invalid data:", newData);
        return;
      }
      setFinSubcategoryNames(newData.map(item => item.label));
    };
    
    const handleSetDropdown2Data = (newData) => {
      if (!newData || !Array.isArray(newData)) {
        console.error("handleSetDropdown2Data received invalid data:", newData);
        return;
      }
      setFinSubcategory2Values(newData.map(item => item.label));
    };
    
    
    const handleDropdown1Change = (sectionId, selectedValue, setSections) => {
      setSections(prev =>
        prev.map(section =>
          section.id === sectionId
            ? { ...section, selectedDropdown1: selectedValue }
            : section
        )
      );
    };
    
    const handleDropdown2Change = (sectionId, selectedValue, setSections) => {
      setSections(prev =>
        prev.map(section =>
          section.id === sectionId
            ? { ...section, selectedDropdown2: selectedValue }
            : section
        )
      );
    }; 
    const handleAddSection = (setSections, type) => {
      if (dataLoaded && finSubcategoryNames.length > 0 && finSubcategory2Values.length > 0) {
        setSections(prev => [
          ...prev,
          {
            id: prev.length + 1,
            dropdowns1: finSubcategoryNames.map((name, index) => ({
              id: index + 1,
              label: name,
              value: name
            })),
            dropdowns2: finSubcategory2Values.map((value, index) => ({
              id: index + 1,
              label: value,
              value: value
            })),
            value: '',
          },
        ]);
      } else {
        console.log('Les données des sous-catégories ne sont pas encore chargées.');
      }  
  
    }

    return (
      <View style={styles.container}>
        <LabelComponent style={styles.label} name="Finances" />

        {/* SECTIONS DE CRÉDIT */}
        {creditSections.map(section => (
          <View key={`credit-${section.id}`}>
            <DepotCredit
    dropdowns1={section.dropdowns1}
    dropdowns2={section.dropdowns2}
    value={section.value} 
    onValueChange={(val) => {
      setCreditSections(prev =>
        prev.map(s => (s.id === section.id ? { ...s, value: val } : s))
      );
    }}
    onDropdown1Change={(val) => handleDropdown1Change(section.id, val, setCreditSections)} 
    onDropdown2Change={(val) => handleDropdown2Change(section.id, val, setCreditSections)}  
    setData1={handleSetDropdown1Data} // Ajout du setData pour dropdown1
  setData2={handleSetDropdown2Data} 
    name={'Crédit'}
  />

          </View>
        ))}
        <AddButton onPress={() => handleAddSection(setCreditSections, 'credit')} text="Add Crédit" />

        {/* SECTIONS DE DÉBIT */}
        {debitSections.map(section => (
          <View key={`debit-${section.id}`}>
            <DepotCredit
    dropdowns1={section.dropdowns1}
    dropdowns2={section.dropdowns2}
    value={section.value}
    onValueChange={(val) => {
      setDebitSections(prev =>
        prev.map(s => (s.id === section.id ? { ...s, value: val } : s))
      );
    }}
    onDropdown1Change={(val) => handleDropdown1Change(section.id, val, setDebitSections)} 
    onDropdown2Change={(val) => handleDropdown2Change(section.id, val, setDebitSections)} 
    setData1={handleSetDropdown1Data} // Ajout du setData pour dropdown1
  setData2={handleSetDropdown2Data} 
    name={'Débit'}
  />

          </View>
        ))}
        <AddButton onPress={() => handleAddSection(setDebitSections, 'debit')} text="Add Débit" />
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