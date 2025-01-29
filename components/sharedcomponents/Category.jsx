import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AddButton from '../sharedcomponents/buttons/addbutton';
import DropDownListe from './DropDownListe';

const Category = () => {
  // Initialisez l'état avec deux objets DropDownListe
  const [dropdowns, setDropdowns] = useState([{id: 0}, {id: 1}]);

  const handleAddDropDown = () => {
    // Ajoute une nouvelle instance de DropDownListe à l'état
    setDropdowns(prevDropdowns => [
      ...prevDropdowns,
      {id: prevDropdowns.length},
    ]);
  };

  console.log(dropdowns,"dropdowns")

  return (
    <View style={{flex: 1, padding: 16}}>
      <ScrollView style={{marginBottom: 20} 
      
    }>
        {/* Affiche les DropDownListe */}
        {dropdowns.map(dropdown => (
          <DropDownListe
            key={dropdown.id} // Utilisez un identifiant unique pour chaque composant
            SetSelectedChoice={val => console.log(val)} // Gérez l'état de sélection comme nécessaire
            placeholder={`Choix ${dropdown.id + 1}`}
          />
        ))}
      </ScrollView>

      {/* Placez le bouton en dessous des dropdowns */}
      <AddButton onPress={handleAddDropDown} text="Add sub-category" />
    </View>
  );
};

export default Category;
