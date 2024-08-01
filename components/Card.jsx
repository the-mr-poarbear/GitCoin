import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const Card = ({item , onPress}) => {
  
  const im = 'https://i.postimg.cc/XY3XvkkQ/QnA.png'
  return (
    <Pressable style={styles.item} onPress={()=> {onPress(item),console.log('hi')}}>
        <View style={{flexDirection:'row' }}>
            {/* {console.log(item , 'lkkkkkkkkkk')} */}
            <Image resizeMode='contain' style={styles.icon} source={{uri:item.image}} />
            {/* <Image  style={styles.icon} source={require('../assets/course.png')} /> */}
            <View style={{}}>
               <Text multiline style={styles.text}>{item.title}</Text>
               <Text multiline style={styles.starText}>stars per hour</Text>
               <Text multiline style={[styles.starText , {color:'white'}]}>+{Math.round(item.initStars + item.lvl * item.starsRate)} C </Text>
            </View>
            
        </View>
        <View style={styles.bottomSection}>
               <Text multiline style={{color:'white' , fontSize:11 , paddingEnd:5 , borderRightColor:'#686868' , borderRightWidth:1}}>lvl {item.lvl}</Text>
               <Text multiline style={styles.text}>{Math.round(item.iinitPrice + item.lvl * item.priceRate)} C</Text>
        </View>
        
    </Pressable>
  )
}

const styles= StyleSheet.create({

  
    item: {
      backgroundColor: '#121212',
      borderWidth:1,
      borderColor:'#686868',
      paddingVertical: 8,
      paddingHorizontal:12,
      width:'45%',
      height:'90%',
      marginVertical: 5,
      marginHorizontal: "2%",
      borderRadius:15
    },
    text: {
      fontSize: 11,
      color:'white',
      flexShrink:1,
      marginHorizontal:6,
     
      
    },

    icon:{
        width:40,
        height:40,
    },
  
    starText:{
      fontSize: 11,
      color:'#686868',
      flexShrink:1,
      marginHorizontal:6,
      marginTop:6,
    },
    
    bottomSection:{
        borderTopColor:'#686868',
        borderTopWidth:1,
        flexDirection:'row',
        marginTop:6,
        alignItems:'center'
    },
  })

export default Card