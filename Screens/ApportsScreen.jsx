import React, {SafeAreaView, ScrollView} from 'react-native';
import HeaderComponent from '../components/sharedcomponents/HeaderComponent';
import Ammount from '../components/sharedcomponents/Ammount';
import DatePeacker from '../components/sharedcomponents/DatePeacker';
import Account from '../components/sharedcomponents/Account';
import Finance from '../components/sharedcomponents/Finance';
import Media from '../components/sharedcomponents/Media/Media';
import Description from '../components/sharedcomponents/Description';
const ApportsScreen = props => {
  const {title, type} = props.route.params;
  console.log(title, 'title');
  console.log(type, 'typeaaaa');

  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderComponent title={title} type={type} />
        <Ammount type={type} />
        <DatePeacker />
        <Description />
        <Account />
        <Finance />
        <Media />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApportsScreen;
