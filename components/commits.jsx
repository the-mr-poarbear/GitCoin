import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Commits = () => {
  return (
    <View style={styles.container}>
        <Image style={{ width: 40, height: 40, resizeMode: 'contain', }} source={require('../assets/commitIcon.png')} />
        <Text style={styles.text}>2302931</Text>
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