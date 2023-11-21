import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './navigation/index'
import { FavoriteProductsProvider } from './context/context';
import PhoneContextProvider from './store/phone-context';

export default function App() {
  return (
    <PhoneContextProvider>
      <FavoriteProductsProvider>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </FavoriteProductsProvider>
    </PhoneContextProvider>
  );
}

const styles = StyleSheet.create({

});
