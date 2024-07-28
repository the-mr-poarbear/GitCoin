import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform, Button } from 'react-native';

import Main from './screens/main.jsx';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const userContext = createContext()
const Stcak = createNativeStackNavigator()

export default function App() {
  const [user, setUser] = useState({ name: 'mmd', stars: 10, commits: 4, maxEnergy: 5000, energyBoost: 3, touchBoost: 2 })

  function test() {

    axios.get('https://git-coin-back-6f19gdihd-arsams-projects-77f4e3b3.vercel.app/getuser/mmd').then((res) => {
      console.log(res.data)
      setUser(res.data)
    }).catch(error => console.log(error));

    // fetch('https://git-coin-back-l00vulbav-arsams-projects-77f4e3b3.vercel.app/getuser/mmd')
    //   .then((res) => {
    //     console.log(res)
    //   }).catch((err) => { console.log(err) })
  }

  function test2() {
    console.log('hi')
    axios.post('https://git-coin-back-6f19gdihd-arsams-projects-77f4e3b3.vercel.app/', { name: 'mmd', stars: 10, commits: 4, maxEnergy: 5000, energyBoost: 3, touchBoost: 2 }).then((res) => {
      console.log(res.data)
    }).catch(error => console.log(error));
  }

  return (
    <NavigationContainer>
      <Stcak.Navigator>
        <userContext.Provider value={{ user, setUser }}>
          <SafeAreaView style={styles.container}>


            <Stcak.Screen name='enter' component={Main} />
            <Stcak.Screen name='main' component={Main} />


            <StatusBar style="auto" />
          </SafeAreaView>

        </userContext.Provider>
      </Stcak.Navigator>
    </NavigationContainer>
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
