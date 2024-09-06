import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import ListingPage from './src/listingPage';
import CartScreen from './src/cartScreen';
import { RootStackParamList } from './src/Types';
import AppInitializer from './src/AppInitializer';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppInitializer />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ListingPage">
            <Stack.Screen name="ListingPage" component={ListingPage} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
    //
  );
};

export default App;
