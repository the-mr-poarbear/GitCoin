import React, { useContext } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { userContext } from '../App'
import { energyContext } from '../screens/main'

const GitCatButton = () => {
  const {user , setUser} = useContext(userContext)
  const {energy , setEnergy} = useContext(energyContext)


  function onPressBtn(){
    
    if (energy > 0 ){
      setUser({...user , commits : user.commits + user.touchBoost})
      setEnergy(energy - user.touchBoost)
    }
  }

  return (
    <TouchableOpacity onPress={onPressBtn}>
        <Image style={{ width: 250, height: 250, resizeMode: 'contain', }} source={require('../assets/gitcatBtn.png')} />
    </TouchableOpacity>
  )
}

export default GitCatButton