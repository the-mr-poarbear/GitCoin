import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import Commits from '../components/commits'
import GitCatButton from '../components/GitCatButton'
import Navbar from '../components/Navbar'
import Energy from '../components/energy'
import Stars from '../components/Stars'

const Main = () => {
  
  return (
    <View style={{alignItems:'center' }}>
        <Stars/>
        <Commits />
        <GitCatButton />
        <Energy/>
        <Navbar />
    </View>
    
  )
}


export default Main