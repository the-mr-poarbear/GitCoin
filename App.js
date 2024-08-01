import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform, Button, AppState } from 'react-native';

import Main from './screens/main.jsx';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Enter from './screens/Enter.jsx';
import Boost from './screens/Boost.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useAppState from "react-native-useappstate";


export const userContext = createContext()
const Stcak = createBottomTabNavigator()

export default function App() {
  const [user, setUser] = useState({ name: 'mmd', stars: 10, commits: 4, maxEnergy: 5000, energyBoost: 3, touchBoost: 2 })
  const apiLink = 'https://git-coin-back-aonkeqi6v-arsams-projects-77f4e3b3.vercel.app/'
  const appState = useAppState();

  useEffect(() => {
    if (appState == 'background' || appState == 'inactive') {
      console.log('info is being sent to api', user)
      axios.put(apiLink + "/UpdateUser", user).then(res => console.log(res.data)).catch(err => console.log(err))

    }

  }, [appState])

  return (

    <GestureHandlerRootView>
      <userContext.Provider value={{ user, setUser, apiLink }}>
        <NavigationContainer>
          {/* {console.log(appState, 'app state')} */}


          <Stcak.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,

              tabBarStyle: {
                height: 90,
                paddingHorizontal: 5,
                paddingTop: 0,
                backgroundColor: 'black',
                borderTopWidth: 0,
              },
            })}
          >



            <Stcak.Screen name='enter' component={Enter} options={() => ({ headerShown: false, tabBarShowLabel: false, tabBarStyle: { display: 'none' }, tabBarButton: () => null, tabBarIconStyle: { display: 'none' } })} />
            <Stcak.Screen name='main' component={Main} options={{
              headerShown: false, tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image style={styles.icon} source={require('./assets/commit.png')} />
                    <Text style={styles.text}>Commits</Text>
                  </View>
                )
              }
            }} />
            <Stcak.Screen name='boost' component={Boost} options={{
              headerShown: false, tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image style={styles.icon} source={require('./assets/boost.png')} />
                    <Text style={styles.text}>Boost</Text>
                  </View>
                )
              }
            }} />


          </Stcak.Navigator>
          <StatusBar style="auto" />

        </NavigationContainer>
      </userContext.Provider>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({

  icon: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 5,
    alignSelf: 'center'
  },

  text: {
    color: 'white',
    fontSize: 10,
  },
})


