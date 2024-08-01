import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { FlatList, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { userContext } from '../App';
import Commits from '../components/commits';
import Stars from '../components/Stars';
import Card from '../components/Card';
import BoostPopup from '../components/boostPopup';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import axios from 'axios';


 let DATA = 
  [
  {
    
      id: 15,
        title: 'Create a Team',
        image:'https://i.postimg.cc/9Xt2JHhF/team.png',
        initPrice:20000,
        initStars:2000,
        priceRate: 2.5,
        starsRate: 1.6,
        description: "Create Your Own Team to Boost Your Carrier"
    
  },
  {
    "id": 1,
    "title": "Send Resume",
    "image":"https://i.postimg.cc/Xq80Jd8y/resume.png",
    "initPrice":10600,
    "initStars":230,
    "priceRate": 2.1,
    "starsRate": 1.5,
    "description":"Send Your Resume To Big Companies"
  },
  {
    "id": 2,
    "title": "Freelancing",
    "image":"https://i.postimg.cc/B6jr3R8k/freelance2.png",
    "initPrice":10000,
    "initStars":2000,
    "priceRate": 3.5,
    "starsRate": 1.1,
    "description":"Do Freelancer Jobs to Get Recognition"
  },
  {
    "id": 3,
    "title": "Answer Questions",
    "image":"https://i.postimg.cc/XY3XvkkQ/QnA.png",
    "initPrice":3000,
    "initStars":20,
    "priceRate": 2.5,
    "starsRate": 1.8,
    "description":"Answer Questions On Github So People Start Believing In You"
  },
  {
    "id": 4,
    "title": "Youtube Channel",
    "image":"https://i.postimg.cc/8Pz0gqqH/youtube.webp",
    "initPrice":42200,
    "initStars":4000,
    "priceRate": 3,
    "starsRate": 1.7,
    "description":"Start Your Own Youtube Channel"
  },
  {
    "id": 5,
    "title": "GitCoin",
    "image":"https://i.postimg.cc/RCyP6Xh1/commit-Icon.png",
    "initPrice":200,
    "initStars":20,
    "priceRate": 2.5,
    "starsRate": 1.6,
    "description":"Invest In GitCoin"
  },
  {
    "id": 6,
    "title": "Code Festival",
    "image":"https://i.postimg.cc/1XSxKHtP/code-Festival.png",
    "initPrice":200,
    "initStars":20,
    "priceRate": 2.5,
    "starsRate": 1.6,
    "description":"Participate Code Festivals And Compete To Improve Your Carrier"
  },
  {
    "id": 7,
    "title": "Email",
    "image":"https://i.postimg.cc/zX0mnT1Z/email.png",
    "initPrice":200,
    "initStars":20,
    "priceRate": 2.5,
    "starsRate": 1.6,
    "description":"Get The Email Of Most Famous CEOs Of World And Introduce Them To Your Work",
  },
  {
    "id": 8,
    "title": "Faster Internet",
    "image":"https://i.postimg.cc/g0r4f65h/fast-Internet.png",
    "initPrice":200,
    "initStars":20,
    "priceRate": 2.5,
    "starsRate": 1.6,
    "description":"Improve Your Internet Speed",

  },
  {
    "id": 9,
    "title": "Better System",
    "image":"https://i.postimg.cc/Mp69mLmd/better-System.png",
    "initPrice":200,
    "initStars":20,
    "priceRate": 2.5,
    "starsRate": 1.6,
    "description":"Improve Your System To Get Better Performancer"

  },
  {
    "id": 10,
    "title": "AI Assistent",
    "image":"https://i.postimg.cc/3JCLphmk/AIAssistent.png",
    "initPrice":200,
    "initStars":20,
    "priceRate": 2.5,
    "starsRate": 1.6,
    "description":"Hire an AI Assistent To Help You Through Your Projects"

  },
  {
    "id": 11,
    "title": "Rent Office",
    "image":"https://i.postimg.cc/c4N9rCgq/rent-Office.png",
    "initPrice":200,
    "initStars":20,
    "priceRate": 2.5,
    "starsRate": 1.6,
    "description":"Rent a Bigger Office to Have More Space"

  },
  {
    "id": 12,
    "title": "Hire",
    "image":"https://i.postimg.cc/KcTpGBYr/hire.png",
    "initPrice":200,
    "initStars":20,
    "priceRate": 2.5,
    "starsRate": 1.6,
    "description":"Hire People To Help You Through Your Projects"

  },
  {
    "id": 13,
    "title": "Advertisement",
    "image":"https://i.postimg.cc/W15XW79j/commercial.png",
    "initPrice":200,
    "initStars":20,
    "priceRate": 2.5,
    "starsRate": 1.6,
    "description":"Advertise Your Services To Reach More People"

  },
  {
    "id": 14,
    "title": "Course",
    "image":"https://i.postimg.cc/NFRddqnP/course.png",
    "initPrice":200,
    "initStars":20,
    "priceRate": 2.5,
    "starsRate": 1.6,
    "description":"Hold Programming Courses To Get Recognition"

  },
];

//develope a new language
//make a new game
// export const bottomPopupContext = createContext()

const Boost = () => {
  const {user , setUser , apiLink} = useContext(userContext)
  const bottomSheetRef = useRef(null);
  const [selectedItem , setSelectedItem] = useState({})

  function LoadPopUp(item){
    bottomSheetRef.current?.expand()
    console.log(item)
    setSelectedItem(item)
  }

  useEffect(()=>{
    axios.get(apiLink + '/Item/getAllItems/'+ user.name).then((res)=>{
      //console.log(res.data)
      DATA = res.data
    }).catch(err => console.log(err))
  },[])
  return (
    <SafeAreaView style={styles.container}>
         <BottomSheetModalProvider>
        {/* <Text style={styles.header}>{user.commits}</Text> */}
        <Stars stars={user.stars} marginB={50}/>
        {/* <Commits/> */}
        <Image style={{ width: 40, height: 40, resizeMode: 'contain', }} source={require('../assets/commitIcon.png')} />
        <Text style={styles.text}>{user.commits}</Text>
        <Text style={styles.header}>Projects</Text>

          {/* <bottomPopupContext.Provider value={{bottomSheetRef}}> */}
            <FlatList
            columnWrapperStyle={{justifyContent:'center'}}
            numColumns={2}
            keyExtractor={item => item.id}
            data={DATA}
            style={{ borderTopColor:'white', borderTopWidth:1, paddingTop:10}}
            renderItem={({item}) => <Card item={item} onPress={(item)=>LoadPopUp(item)}  />} 
            />
          
          
            <BoostPopup item={selectedItem} bottomSheetRef={bottomSheetRef}/>
          {/* </bottomPopupContext.Provider> */}
        </BottomSheetModalProvider>
       
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },

  text:{
    fontSize:30,
    color:'white',
    paddingStart:10,
    marginBottom:50,
  },

  header:{
    color:'white',
    fontSize:30,
    marginBottom:20,
  
  },


  
})

export default Boost