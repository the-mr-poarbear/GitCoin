import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Navbar = () => {
 const navigation = useNavigation()

  return (
   <View style={styles.container}>
    <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('main')}>
        <Image style={styles.icon} source={require('../assets/commit.png')}/>
        <Text style={styles.text}>Commits</Text>
    </TouchableOpacity >

    <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('boost')}>
        <Image style={styles.icon} source={require('../assets/boost.png')}/>
        <Text style={styles.text}>Boost</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn}>
        <Image style={styles.icon} source={require('../assets/friends.png')}/>
        <Text style={styles.text}>Friedns</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn}>
        <Image style={styles.icon} source={require('../assets/contact.png')}/>
        <Text style={styles.text}>Contact Me</Text>
    </TouchableOpacity>
    
   </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        width:'78%',
        display:'flex',
        justifyContent:'space-between',
        marginTop:50,
        paddingBottom:10,

        
    },

    icon:{
        width:20,
        height:30,
        resizeMode:'contain',
        marginBottom:5,
    },

    text:{
        color:'white',
        fontSize:10
    },

    btn:{
        alignItems:'center'
    }
});

export default Navbar