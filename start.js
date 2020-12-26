
// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet,ImageBackground, FlatList, Text, View, Alert,TouchableOpacity, Button,Image } from "react-native";
import Labels from './src/view/screen/label'

class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {            
         }
    }

   
    
    relocated = () =>{
      console.log(this.props.navigation.navigate);    
      this.props.navigation.navigate('Label');
    }
    render() { 
        
        return ( 
            <View style={styles.container} >
              
              <ImageBackground source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-7YxjUHANiu7ytJdCb-O-uF2Hb2p2PjVCWWtHufLHzf1kvW4OcYhZUHnAo-wvHm0D9vBrJB3QcNNV-pWWT8qRBKobAWpdbY&usqp=CAU&ec=45732304', }} style={styles.image}>
               
                <View style={styles.message}> 
                        
                        <Text style={styles.textsmall}> <Text style={styles.text}>Welcome</Text> To Enjoy the game and lots of chanlenges </Text>
                </View>
                <Button style={styles.button} title=" Get Start" onPress={this.relocated}></Button>
                <View style={styles.blank}> 

                </View>
              </ImageBackground>
            </View>
         );
    
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end"

  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    // /backgroundColor: "#000000a0"
  },
  textsmall: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  message:{
    marginBottom:300,
  },
  button:{
      marginBottom:120,

  },
  blank:{
    marginVertical:20,
  }
  });
export default Start;
