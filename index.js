import React, { Component } from 'react'
import { 
  AppRegistry,
  I18nManager,
  StyleSheet,
  Text,
  View 
} from 'react-native'
I18nManager.forceRTL(true);

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

export default class Maeda extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Home />
        <Footer />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFA'
  }
})


AppRegistry.registerComponent('maeda_application', () => Maeda)
