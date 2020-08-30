import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.main_container}>
      <View style={styles.container}>
        <Text style={styles.header}>Test App</Text>
        <Text style={styles.text}>Test</Text>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: 
  {
    flex: 1,
    backgroundColor: '#141414',
  },

  container:
  {
    marginLeft: 40,
    marginTop: 35,
  },

  header_container:
  {
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 35,
    paddingTop: 40,
  },

  header:
  {
    position: 'relative',
    fontSize: 32,
    color: '#ff0000',
    top: 0,
    left: 0,
  },

  text: 
  {
    fontSize: 22,
    color: '#ffffff'
  },
});
