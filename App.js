import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, CryptoContainer } from './src/components';
import { Provider } from 'react-redux'; 

import store from './src/Store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}
