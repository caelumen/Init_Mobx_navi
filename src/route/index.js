import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import {createBottomTabNavigator} from 'react-navigation-tabs';
import {View, Text} from 'native-base';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import DetailsScreen from '../screens/DetailsScreen';
import OverlayScreen from '../screens/OverlayScreen';


const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
    Category: CategoryScreen,
    Overlay : OverlayScreen, 
    },
    {
    initialRouteName: 'Home',
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    },
    navigationOptions: {
        tabBarLabel: 'Home!',
      },
    
    }
);

const RootStack = createAppContainer(HomeStack);
//const RootStack = createAppContainer(HomeStack);
//const AppContainer = createAppContainer(RootStack);

class AppContainer extends React.Component  {
  render() {
    return(
      <View style={{flex:1}}>
        <RootStack />
      </View>
    );
  }
  
}
export default AppContainer;
//export default inject("store")(observer(AppContainer));
