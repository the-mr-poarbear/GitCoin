import React, { createContext, useContext, useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
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
      <View style={{alignItems:'center'}}>
          {/* {console.log(user)} */}
          <Stars stars={user.stars}/>
          <Commits commits={user.commits} stars={user.stars} />
          <GitCatButton />
          <Energy userMaxEn={user.maxEnergy} energyBoost={user.energyBoost} />
          <Navbar />
      </View>
    </energyContext.Provider>
    
  )
}


export default Main