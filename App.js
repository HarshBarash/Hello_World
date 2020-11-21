import React, { } from 'react';
import { View, Text, Image, StyleSheet,  } from 'react-native'
import Emoji from 'react-native-emoji';

const TextExample = () => {

  return (
    <View><Text style = {styles.text} >
        <Text style = {styles.italicText}>Hello World!</Text></Text>

      <View style = {styles.container}>
        <Image style={  styles.profileImgContainer  }
               source={{uri: "https://www.jingu.ru/sirius/jingu-logo-512.png"}} />

        <Text style = {styles.textStyle } >
          <Text style = {styles.italicText }>
                Антон Баранов
          </Text >
        </Text >

        <Emoji name="coffee"  style={{fontSize: 80}}/>

      </View>
    </View>
  )
}
export default TextExample

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
    marginTop: 30,
    padding: 90
  },
     textStyle: { color: "#41cdf4", fontSize: 20
  },
    profileImgContainer: {
        marginLeft: 16,
        margin: 30,
        height: 180,
        width: 180,
        borderRadius: 120,

    },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },

  italicText: {
    color: '#37859b',
    fontStyle: 'italic'
  }
})
