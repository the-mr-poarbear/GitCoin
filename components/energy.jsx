import React, { useContext, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { useSetInterval } from '../hooks/useSetInterval'
import { energyContext } from '../screens/main'

const Energy = ({userMaxEn , energyBoost}) => {
  const {energy , setEnergy} = useContext(energyContext)

  useSetInterval(() => {
   
    if(energy < userMaxEn){ 
      setEnergy(energy + energyBoost)
    }else if(energy > userMaxEn){
      setEnergy(userMaxEn)
    }
    
  }, 1000)

  return (
    <View style={{flexDirection:'row' , marginTop:40 , alignSelf:'flex-start'}}>
        <Image style={{width:20, height:20, marginEnd:10 , resizeMode:'contain'}} source={require('../assets/contribution.png')} />
        <Text style={{color:'white'}}>{energy}/{userMaxEn} </Text>
    </View>
  )
}

export default Energy