import React from 'react'
import { Image, Text, View } from 'react-native'

const Energy = () => {
  return (
    <View style={{flexDirection:'row' , marginTop:40 , alignSelf:'flex-start'}}>
        <Image style={{width:20, height:20, marginEnd:10 , resizeMode:'contain'}} source={require('../assets/contribution.png')} />
        <Text style={{color:'white'}}>5000/5000 </Text>
    </View>
  )
}

export default Energy