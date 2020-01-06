import React from 'react';
import {
    SafeAreaView,
    View, Text,
} from 'react-native';
import store from '../store';

class HomeScreen extends React.Component {
navi = this.props.navigation;
 render() {
 return (
     <SafeAreaView>
         <Text>Home</Text>
     </SafeAreaView>
  
   );
 }
};

export default HomeScreen;