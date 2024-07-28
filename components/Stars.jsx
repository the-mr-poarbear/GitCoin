
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Stars = ({stars}) => {

 

  return (
    <View style={styles.container}>
        <Image style={styles.icon} source={require('../assets/star.png')}/>
        <Text style={styles.text}>+ {stars}KC</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    icon:{
        width:30,
        height:30,
        resizeMode:'contain',
       
    },

    container:{
        flexDirection:'row',
        width:'65%',
        display:'flex',
        justifyContent:'space-between',
        paddingVertical:10,
        borderColor:'#535353',
        borderWidth:2,
        borderRadius:20,
        paddingHorizontal:20,
        marginBottom:130,
        
    },

    text:{
        color:'white',
        fontSize:20
    }

});

export default Stars