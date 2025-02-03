import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import AddButton from '../sharedcomponents/buttons/addbutton';
import DropDownListe from './DropDownListe';
import {getAllcategories} from '../../Services/apiDenses';
const Category = ({
  onCategorySelect,
  id,
  selectedCategory,
  selectedCategories,
  setSelectedCategories,
  categories,
  setCategories,
  setSelectedPath,
  selectedPath,
}) => {
  //const [categories, setCategories] = useState([]);
  //state to store all selected categories on all dropdowns

  console.log(selectedPath, 'selectedPath');
  const [fetchedCategories, setFetchedCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getAllcategories();
      setFetchedCategories(response);

      const filtredCategories = response.filter(
        category => category.categoryName === 'firstanme',
      );

      setCategories([
        {
          id: 'dropdownv0',
          categories: filtredCategories.flatMap(category =>
            category.subcategories?.map(subcategory => ({
              label: subcategory,
              value: subcategory,
            })),
          ),
        },
      ]);
    };

    fetchCategories();
  }, []);

  const handleSelectChoice = (id, selectedChoice) => {
    console.log('first', selectedChoice);
    onCategorySelect(selectedChoice);

    //get data added
    // const getDataFromFetch = fetchedCategories.filter(
    //   category => category?.categoryName === selectedChoice?.label,
    // );

    // const newCategories = getDataFromFetch.flatMap(category =>
    //   category.subcategories?.map(subcategory => ({
    //     label: subcategory,
    //     value: subcategory,
    //   })),
    // );

    //if choicce dosnt exit add it to the list

    const index = categories.findIndex(category => category.id === id);

    const subcategoryExists = categories[index].categories.some(
      subcategory => subcategory.label === selectedChoice.label,
    );

    const getSubcategory = fetchedCategories.filter(
      category => category?.categoryName === selectedChoice?.label,
    );

    if (getSubcategory.length > 0) {
      setSelectedPath(prevSelectedPath => [
        getSubcategory,
        ...prevSelectedPath.slice(0, index),
      ]);
    } else {
      setSelectedPath(prevSelectedPath => [
        selectedChoice,
        ...prevSelectedPath.slice(0, index),
      ]);
    }
    if (!subcategoryExists) {
      categories[index].categories.push({
        label: selectedChoice.label,
        value: selectedChoice.value,
      });
    }
    const newCategoriess = categories.slice(0, index + 1);
    setCategories(newCategoriess);

    const newSelectedCategories = [...selectedCategories];
    newSelectedCategories[index] = selectedChoice.label;
    setSelectedCategories(newSelectedCategories.slice(0, index + 1));
  };

  const handleAddDropDown = () => {
    const getDataFromFetch = fetchedCategories.filter(
      category => category?.categoryName === selectedCategory?.label,
    );

    const newCategories = getDataFromFetch.flatMap(category =>
      category.subcategories?.map(subcategory => ({
        label: subcategory,
        value: subcategory,
      })),
    );

    const lastIndex =
      categories.length > 0
        ? categories[categories.length - 1].id.split('v')[1]
        : 0;

    const newIndex = parseInt(lastIndex, 10) + 1;

    const newCategory = {
      id: `dropdownv${newIndex}`,
      categories: newCategories,
    };

    setCategories(prevCategories => [...prevCategories, newCategory]);
  };

  return (
    <View style={{flex: 1, padding: 16}}>
      <ScrollView
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        removeClippedSubviews={false}
        contentContainerStyle={{flexGrow: 1, paddingBottom: 80}}>
        {categories?.map((category, index) => (
          <View
            key={category.id}
            style={{
              zIndex: categories.length - index,
              position: 'relative',
            }}>
            <DropDownListe
              setSelectedChoice={selectedChoice =>
                handleSelectChoice(category.id, selectedChoice)
              }
              // setData={newSubcategory =>
              //   handleAddSubcategory(category.id, newSubcategory)
              // }

              setData={() => {
                setCategories();
              }}
              options={category?.categories}
              placeholder="Choisissez une catégorie"
            />
          </View>
        ))}

        <AddButton
          onPress={handleAddDropDown}
          text="Ajouter une sous-catégorie"
        />
      </ScrollView>
    </View>
  );
};

export default Category;
