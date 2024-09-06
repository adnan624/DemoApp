import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BasicInfo from '../screens/registration/basicInfo';
import InfoPage from '../screens/registration/infoPage';
import Address from '../screens/registration/address';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="basicInfo">
        <Stack.Screen
          name="basicInfo"
          component={BasicInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="infoPage"
          component={InfoPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="address"
          component={Address}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
