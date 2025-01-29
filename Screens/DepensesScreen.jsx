import React, {SafeAreaView, ScrollView} from 'react-native';
import HeaderComponent from '../components/sharedcomponents/HeaderComponent';
import Ammount from '../components/sharedcomponents/Ammount';
import DatePeacker from '../components/sharedcomponents/DatePeacker';
import Account from '../components/sharedcomponents/Account';
import Finance from '../components/sharedcomponents/Finance';
import Media from '../components/sharedcomponents/Media/Media';
import Description from '../components/sharedcomponents/Description';
import Category from '../components/sharedcomponents/Category';

const DepensesScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderComponent title="Dépense" />
        <Ammount type="depense" />
        <DatePeacker />
        <Category />

        <Description />
         <Account />
         <Finance /> 
        <Media />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DepensesScreen;
