import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './navigation/index'
import { FavoriteProductsProvider } from './context/context';

export default function App() {
  return (
    <FavoriteProductsProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </FavoriteProductsProvider>
  );
}

const styles = StyleSheet.create({

});
