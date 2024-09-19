/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ProductListScreen from './src/presentation/components/ProductListScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ProductListScreen />
    </SafeAreaView>
  );
}

export default App;
