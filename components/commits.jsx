import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useSetInterval } from '../hooks/useSetInterval'
import { userContext } from '../App'


const Commits = () => {
  // const [com , setCom] = useState(0)
  const {user , setUser} = useContext(userContext)
  

  useSetInterval(() => {
    // setCom(com + stars)
    setUser({...user , 'commits' : user.commits + user.stars})
  }, 1000)

  return (
    <View style={styles.container}>
        <Image style={{ width: 40, height: 40, resizeMode: 'contain', }} source={require('../assets/commitIcon.png')} />
        <Text style={styles.text}>{user.commits}</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        color:'white',
        paddingStart:10,
        marginBottom:50,
    },

    container:{
        flexDirection:'row',
        display:'flex',
        
    }
});

export default Commits