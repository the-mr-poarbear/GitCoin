import React, { createContext, useContext, useState } from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import Commits from '../components/commits'
import GitCatButton from '../components/GitCatButton'
import Navbar from '../components/Navbar'
import Energy from '../components/energy'
import Stars from '../components/Stars'
import { userContext } from '../App'


export const energyContext = createContext()

const Main = () => {
  const {user , setUser} = useContext(userContext)
  const [energy , setEnergy] = useState(user.maxEnergy)
  

  return (
    <energyContext.Provider value={{energy , setEnergy}}>
      <SafeAreaView style={styles.container}>
          {/* {console.log(user)} */}
          <Stars stars={user.stars}/>
          <Commits />
          <GitCatButton />
          <Energy userMaxEn={user.maxEnergy} energyBoost={user.energyBoost} />
          {/* <Navbar /> */}
      </SafeAreaView>
    </energyContext.Provider>
    
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
})



export default Main