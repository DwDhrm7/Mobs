import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.brandContainer}></View>
          </View>
          <View style={styles.navigation}>
            <View style={styles.navitem}>
              <View style={styles.navimage}></View>
              <View style={styles.navlabel}></View>
            </View>
          </View>
          <View style={styles.order}></View>
          <View style={styles.favorite}></View>
          <View style={styles.food}></View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: 'red',
    padding:10,
    alignItems:'flex-end',
  },
  brandContainer: {
    width: 80,
    height: '100%',
    backgroundColor: 'white',
  },
  navigation: {
    backgroundColor: 'grey',
    padding: 20,
  },
  navitem: {
    width: 100,
    height: 100,
    backgroundColor: 'magenta',
  },
  navimage: {
    flex: 1,
    backgroundColor: 'salmon',
  },
  navlabel: {
    height: 20,
    backgroundColor: 'blue',
  },
  order: {
    height: 100,
    backgroundColor: 'red',
  },
  favorite: {
    height: 100,
    backgroundColor: 'white',
  },
  food: {
    height: 100,
    backgroundColor: 'blue',
  },  
});
export default App;
