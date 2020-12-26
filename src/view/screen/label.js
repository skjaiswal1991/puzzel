import React, { Component } from 'react';
import { Platform, StyleSheet,ImageBackground, TouchableWithoutFeedback,FlatList, Text,SafeAreaView,View, Alert,TouchableOpacity, Button,Image,ScrollView } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'
import {Dialog,DialogFooter,DialogButton,DialogContent,DialogTitle} from 'react-native-popup-dialog'
import RNExitApp from 'react-native-exit-app';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import {_storeData,_retrieveData} from './../../../storage/storage';

class Label extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label:1,
            visible:false
        }

        _storeData({key:'lebel',value:'1'})
        _retrieveData('lebel').then((result)=> {
            // console.log(result)
             this.setState({label:result})
           })
      this.updateData()
    }

    updateData = () =>{
               
    }


    changeHendler = () =>{

        this.props.navigation.navigate('Grid')
    }
    render() { 
    const {label} = this.state;
         
     const rating = () =>(
       
                {/* {[...Array(1)].map((d, i) => { */}
                    <FontAwesome5 name="star" size={15}  color="yellow" />
                {/* })} */}
          
     ) 

        {/* {[...Array(1)].map((d, i) => { */}
        // <FontAwesome5 name="star" size={15}  color="yellow" />
        {/* })} */}
  
                                                                                                                          
        const Lebeldata = () =>{

           
                   return <>{[...Array(20)].map((d, i) => {

                        return <TouchableWithoutFeedback key={i}
                                    number='0.1'                                  
                                    onPress={()=>{
                                                                           
                                        this.changeHendler()
                                    }}><View style={{height:80,width:80,backgroundColor:'red',borderColor:'white',borderWidth:1,alignItems:'center',justifyContent:"center" }}>
                                    <Text key={i} style={{fontSize:30}}>{i+1}</Text>
                                    <Text style={{fontSize:40,color:'yellow'}}>
                                      {rating}                                       
                                    </Text>
                                </View>
                                </TouchableWithoutFeedback>
                                
                    })}</>

               
        }
        return (
            <>
                <Dialog
                        visible={this.state.visible}
                        footer={
                        <DialogFooter>
                            <DialogButton
                            text="CANCEL"
                            onPress={() => {this.setState({visible:false})}}
                            />
                            <DialogButton
                            text="OK"
                            onPress={() => {
                                this.setState({visible:false})
                                RNExitApp.exitApp();
                            }}
                            />
                        </DialogFooter>
                        }
                        dialogTitle={<DialogTitle title="Alert" />}
                    >
                        <DialogContent>
                            <Text>Are you sure you want to Exit this Game?</Text>
                        </DialogContent>
                    </Dialog>
                <SafeAreaView style={{flex:1,flexDirection:'row',width:'100%'}}>
                    
                    
                    <View style={{justifyContent:'flex-end',alignItems:'flex-start',width:'80%'}}><Text style={{fontSize:22}}>Welcome Collenges Puzzle</Text></View>
                    <TouchableOpacity onPress={()=>this.setState({visible:true})} style={{ alignItems:'flex-end',justifyContent:'flex-end',width:'10%'}}>                        
                        <FontAwesome5 name="bars" size={25} color="#161924" />
                    </TouchableOpacity>
                </SafeAreaView>
                
                    <View style={{flex:9,justifyContent:"center",alignItems:'center',flexWrap:'wrap',flexDirection:'row',width:'100%',marginVertical:20}}>   
                                     
                            <Lebeldata></Lebeldata>
                    </View>
               
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });
 
export default Label;