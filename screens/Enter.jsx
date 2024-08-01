import axios from 'axios'
import React, { useContext, useRef, useState } from 'react'
import { ActivityIndicator, Button, Image, Platform, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { userContext } from '../App'

const Enter = ({navigation}) => {
  let name = ''
  const {user , setUser , apiLink} = useContext(userContext)
  const [loading , SetLoading] = useState(false)
  function LoginSigup(){
    SetLoading(true)
    axios.get(apiLink+name).then((res)=>{
        setUser(res.data)
        console.log(res.data , name)
        navigation.navigate('main')
        SetLoading(false)

    }).catch((err=>{
        console.log(err)
        SetLoading(false)}))
  }

  return (
    <View style={styles.container}>
        <Text style={{color:'white' , top:80 , position:'absolute' , fontSize:50 , textAlign:'center'}}>Welcome to GitCoin</Text>
        {loading && <ActivityIndicator size='large' style={{}}/>}
        <Text style={styles.header}>Please Enter Your Name</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter Your Name Here"
            placeholderTextColor='#5c5c5c'
            onChangeText={text => name =text}
        />

       
        <Pressable style={styles.button} onPress={LoginSigup}>
            <Text style={styles.text}>Open Repository</Text>
        </Pressable>

        
        <Image style={{ width: 350, height: 350, zIndex:-1,resizeMode: 'contain', position:'absolute' , bottom:-120 ,left:-100 }} source={require('../assets/gitcatBtn.png')}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1 , 
        backgroundColor:'#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
       
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderWidth:1,
        borderColor:'white',
        borderRadius:15,
        color:'white',
       
    },

    header:{
        color:'white' , 
        fontSize:20 , 
        marginBottom:20 ,
       
        textAlign:'center'      
    },

    button:{
        backgroundColor:'#1ea627',
        borderRadius:10,
        paddingHorizontal:30,
        paddingVertical:5,
        marginTop:20,
        
    },

    text:{
        color:'white',
        fontSize:15
    },

});

export default Enter