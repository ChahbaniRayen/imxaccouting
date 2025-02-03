import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, Text, StyleSheet} from 'react-native';
import ListeHeader from '../components/screens/dashbord/ListeHeader';
import {ListFooter} from '../components/screens/dashbord/ListFooter';
import {getcompaniesDepenses} from '../Services/apiDenses';
const renderItem = ({item}) => {
  return (
    <View
      style={[
        styles.itemContainer,
        {
          marginBottom: 10,
          borderLeftColor: item?.apport ? '#D72525' : '#00FF00',
        },
      ]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>{item?.date}</Text>
        <Text style={styles.text}>{item?.amount}</Text>
        <Text style={styles.text}>Salaire</Text>
      </View>
      <Text style={styles.description}>{item?.description}</Text>
    </View>
  );
};

function DashbordScreen(props) {
  const {navigation, route} = props;
  const {result = {}} = route?.params || {}; // Vérifie si `route.params` existe
  const {id, name} = result;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCompaniesDepenses = async () => {
      const response = await getcompaniesDepenses(id);
      const {result = {}, success} = response;

      const {finalData = []} = result;

      if (success) {
        setData(finalData || []);
      }
    };
    fetchCompaniesDepenses();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <ListeHeader />
      <FlatList
        scrollEnabled={true}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent} // Ensures the list takes up the full screen
      />
      <ListFooter id={id} navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  listContent: {
    padding: 15,
    flexGrow: 1, // Makes the list stretch to fill available space
    justifyContent: 'space-between', // Pushes the footer to the bottom if items don't take full height
  },
  itemContainer: {
    padding: 15,
    borderLeftWidth: 5,
    // borderLeftColor: '#D72525',
    borderBottomWidth: 1,
    borderBottomColor: '#B1B1B1',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  description: {
    fontSize: 16,
    color: '#000000',
  },
});

export default DashbordScreen;
