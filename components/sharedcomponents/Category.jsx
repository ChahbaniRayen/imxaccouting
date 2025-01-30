import { View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import AddButton from '../sharedcomponents/buttons/addbutton';
import DropDownListe from './DropDownListe';

const Category = () => {
  const [dropdowns, setDropdowns] = useState([{ id: 0 }, { id: 1 }]);
  const [openDropdown, setOpenDropdown] = useState(null); // Stocke l'ID du dropdown ouvert

  const handleAddDropDown = () => {
    setDropdowns(prevDropdowns => [
      ...prevDropdowns,
      { id: prevDropdowns.length },
    ]);
  };

  console.log(dropdowns, "dropdowns");

  return (
    <View style={{ flex: 1, padding: 16 ,}}>
      <ScrollView
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        removeClippedSubviews={false} 
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }} 
      >
        {dropdowns.map((dropdown, index) => (
          <View 
            key={dropdown.id} 
            style={{ 
              zIndex: openDropdown === dropdown.id ? 1000 : dropdowns.length - index,
              position: 'relative' // Assure que chaque dropdown s'affiche correctement
            }}
          >
            <DropDownListe
              SetSelectedChoice={val => console.log(val)}
              placeholder={`Choix ${dropdown.id + 1}`}
              isOpen={openDropdown === dropdown.id}
              setOpenDropdown={() => setOpenDropdown(dropdown.id)}
              closeDropdown={() => setOpenDropdown(null)}
            />
          </View>
        ))} 
              <AddButton onPress={handleAddDropDown} text="Ajouter une sous-catégorie" />

      </ScrollView>

    </View>
  );
};

export default Category;
