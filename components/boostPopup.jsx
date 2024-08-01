import React, { useCallback, useContext, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TouchableHighlight, TouchableOpacity, ActivityIndicator } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { userContext } from '../App';

const BoostPopup = ({item , bottomSheetRef}) => {
  const {apiLink , user,setUser} = useContext(userContext)
  const [error , setError] = useState('')
  const [loading , SetLoading] = useState(false)
  // renders
  function Purchese(){
    SetLoading(true)

    axios.post(apiLink + `/MakePurchese/${user.name}/${item.id}`).then((res)=>{
      console.log(res.data,'d')
      console.log( user.stars , Math.round(item.initStars + item.lvl * item.starsRate),'lvl')
      setUser({...user , "commits": user.commits- Math.round(item.iinitPrice + item.lvl * item.priceRate) , "stars": user.stars + Math.round(item.initStars + item.lvl * item.starsRate)})
      item.lvl++
      setError('') 
    }).catch((err)=>{
      if(err.response.status == 406){
          setError('You Dont Have Enough Commits')
      }else {
        console.log(err.status)
      }
    })
    axios.put(apiLink + "/UpdateUser", user).then(res => {
      console.log(res.data)
      SetLoading(false)
    }).catch(err => {
      console.log(err)
      SetLoading(false)
    })
  }

  return (
    
      <BottomSheet
        snapPoints={[ '60%']}
        index={-1}
        ref={bottomSheetRef}
        enablePanDownToClose
        backgroundStyle={{backgroundColor:'#000' , borderWidth:1 , borderBlockColor:'white' , borderRadius:30 }}
        handleIndicatorStyle={{backgroundColor:'#28D82F'  }}
        
      >   
        <ScrollView contentContainerStyle={styles.innerCont}>
          <Image resizeMode='contain' style={styles.img} source={{uri:item.image}} />
          <Text style={[styles.textDef , styles.header]}>{item.title}</Text>
          <Text style={[styles.textDef]}>{item.description}</Text>
          <Text style={[styles.textDef , styles.textGray]}>stars per hour</Text>
          <Text style={[styles.textDef, {fontSize:11}]}>+{Math.round(item.initStars + item.lvl* item.starsRate)} C</Text>
          <Text style={[styles.txtPrice]}>{Math.round(item.iinitPrice + item.lvl* item.priceRate)} C</Text>
          <Text style={[{color:'red'}]}>{error}</Text>

          <TouchableOpacity style={styles.btn} onPress={Purchese}>
            {loading ? <ActivityIndicator size='large' style={{color:'white'}}/> : <Text style={styles.btnText}>Pay</Text>}
          </TouchableOpacity>
        </ScrollView>
      </BottomSheet>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
    width:'100%',
    height:'100%',
    
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

  textDef:{
    color:'white' , 
    textAlign:'center',
  },

  header:{
    fontSize:30,
    marginBottom:20
  },
  innerCont:{
    width:'80%',
    alignSelf:'center',
    alignItems:'center'
  },
  img:{
    width:80,
    height:80,
    margin:30,
  },
  btn:{
    backgroundColor:'#1e9c23',
    borderRadius:20,
    marginVertical:20,
    width:'80%'    
  },
  btnText:{
    color:'white',
    fontSize:20,
    paddingHorizontal:40,
    paddingVertical:5,
    textAlign:"center"
    
  },
  textGray:{
    color:'#686868',
    marginTop:11,
    marginBottom:3
  },
  txtPrice:{
    color:'white',
    fontSize:20,
    marginTop:20,
  },
});

export default BoostPopup;