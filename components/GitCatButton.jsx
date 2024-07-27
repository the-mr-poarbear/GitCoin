import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

const GitCatButton = () => {
  return (
    <TouchableOpacity onPress={() => { console.log('pressed') }}>
        <Image style={{ width: 250, height: 250, resizeMode: 'contain', }} source={require('../assets/gitcatBtn.png')} />
    </TouchableOpacity>
  )
}

export default GitCatButton