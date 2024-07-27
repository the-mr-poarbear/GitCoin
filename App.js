import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform } from 'react-native';
import Commits from './components/commits';
import GitCatButton from './components/GitCatButton';
import Navbar from './components/Navbar';
import Main from './screens/main.jsx';
import { createContext, useEffect, useState } from 'react';


export const userContext = createContext()

export default function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    console.log('hi')

  }, [])

  return (
    <userContext.Provider value={{ user, setUser }}>
      <SafeAreaView style={styles.container}>
        <Main />
        <StatusBar style="auto" />
      </SafeAreaView>
    </userContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
