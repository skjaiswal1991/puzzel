import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet,SafeAreaView, FlatList, Text, View, Alert,TouchableOpacity,TouchableWithoutFeedback,Button } from "react-native";
import Timer from '../clock';
import {FontAwesome5} from '@expo/vector-icons'
import gridlist from '../../statics/gridlist'
import postionTrack from '../../statics/postion'

import {Dialog,DialogFooter,DialogButton,DialogContent,DialogTitle} from 'react-native-popup-dialog'

class Grid extends Component{

    constructor(props){
        super(props);
        this.state = {            
            max:15,
            min:0,
            stepes:0,
            time:0,
            starttimer:true,
            visible:false,
            number : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
            GridListItems:gridlist
          };

      this.timer = null;
       
    }
    
    componentWillMount(){

        this.ChangePosition();
   
    }
 
    
    updateTime = () =>{

        this.setState({time:this.state.time + 1})
    }

    timerEvent = () =>{
        const { starttimer } = this.state;
      
        if(starttimer){
             this.timer  = setInterval(this.updateTime,1000);
            this.setState({starttimer:false})
        }

      if(!starttimer){  
          clearInterval(this.timer); 
          this.setState({starttimer:true})
      }
    }


    sortLIst = () =>{
       
        this.setState(state =>{
                //numbers.sort((a, b) => a - b)
                var i = 0;
                let data  = state.GridListItems.sort((a,b) => a.index - b.index)
                      console.log('data='+JSON.stringify(data))
                      let udata  = data.filter( k =>{                   
                            k.pos=i;
                            i++;
                            return k;
                        })
                        // console.log('I am here');
                        var Emtindex = this.fundtheempty(udata)[0];
                        // console.log('Emtindex='+JSON.stringify(Emtindex))
                        var res = this.checkMoveEnable(Emtindex.pos)
                        // console.log('res='+JSON.stringify(res))
                        var GridListItems = this.update_the_StateData(res,udata);
                        // console.log(GridListItems)
                return{
                    GridListItems
                }
        }) 
        


    }


    
    replaceAt =(array, index, value)=> {
        const ret = array.slice(0);
        ret[index] = value;
        return ret;
      }
    

    // find the empty 

    fundtheempty = (arry) =>{
        console.log(arry);
        var count = 0;
        var index = arry.filter((ar)=>{
                
            if(ar.hidden == 0){                    
                return ar.key;
            }else{
                count =  count + 1;
            }
                    
        }) 
        return index;    
    }

    updateStateOnChange = (data) => {

            console.log(data);
                this.setState(state=>{
                   let udata =  state.GridListItems.filter( k =>{
                        var result = data.pos.filter(obj => {                            
                            return obj === k.pos
                          })
                       
                          if(result.length > 0){
                              k.activeEvent=1;
                          }else{
                            k.activeEvent=0;
                          }
                          return k;

                    })
                  
                    return {                        
                        GridListItems:udata
                    }
                })

                setTimeout(()=>{
                    this.checkWinner()
                },1000)
                

    }


    update_the_StateData(data,GridListItems){
            console.log(data);
                return GridListItems.map( (k,i) =>{
                        var result = data.pos.filter(obj => {                            
                        return obj === i
                        })
                        console.log(result);
                        console.log(k)
                        if(result.length > 0){
                            k.activeEvent=1;
                        }else{
                        k.activeEvent=0;
                        }
                        return k;

                })

    }

    checkMoveEnable = (Emptindex) =>{
            var data = postionTrack;
            return data[Emptindex]
    }

    checkWinner = () =>{

        console.log(this.state.GridListItems);
        var count = 0;
        this.state.GridListItems.map((k,i)=>{
                if(k.key == i+1){
                    count = count + 1
                }
        })
        console.log(this.state.GridListItems.length)
        console.log(count);
        if(this.state.GridListItems.length == count){
            alert("Congrates| You are Winner");
            this.timerEvent()
        }
    }

    changeHendler(d,pos){

            if(this.state.time === 0){
                this.timerEvent();
            }
            
            this.setState({stepes:this.state.stepes + 1})
            var Emtindex = this.fundtheempty(this.state.GridListItems)[0];
            var arrayData =  this.state.GridListItems[pos]
            // console.log(arrayData);
             var emptydata = { key: Emtindex.key, pos:arrayData.pos, hidden:Emtindex.hidden, activeEvent:0, index: Emtindex.key }
            var arrsy =this.replaceAt(this.state.GridListItems,pos,emptydata)
            var changData = { key: arrayData.key, pos:Emtindex.pos, hidden:arrayData.hidden, activeEvent:0  }
            arrsy = this.replaceAt(arrsy,Emtindex.pos,changData)
            this.setState({GridListItems:arrsy})

           // var nEmtindex = this.fundtheempty(this.state.GridListItems)[0];
            var res = this.checkMoveEnable(pos)
            this.updateStateOnChange(res);
            
                
       // return true;

            
    }

   
    /* generate Rendom function */
    getNumber = () =>  {
        const {number}  = this.state;
        if (0 === number.length) {
            alert('Finish')
        } else {
            var index = Math.floor(Math.random() * number.length);
            return number[index];
            number.splice(index, 1);
        }
    }

    ChangePosition = () =>{
            //this.setState({stepes:0})
       
            this.setState(state=>{
                let udata  = state.GridListItems.filter( k =>{                   
                        k.index=this.getNumber();                        
                        return k;
                    })
                
                console.log(udata);
                return {                        
                    GridListItems:udata
                }
            })
        
            this.sortLIst();
    }

    reset =  () =>{
        this.ChangePosition();
    }

    newStartGame = () =>{
        
        
        this.setState({stepes:0,time:0,starttimer:false})
        this.ChangePosition();
        this.timerEvent();
    }

    arraySort = () =>{

        return numbers.sort((a, b) => a - b);

    }

    onPressActive = () =>{
            this.setState({visible:true})
    }
     
    render(){
        //console.log(this.state.GridListItems);
        const { stepes,time } = this.state;
        return(
            <View>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity onPress={this.onPressActive} style={{ alignItems:'flex-end', margin:25}}>
                        <FontAwesome5 name="bars" size={25} color="#161924" />
                    </TouchableOpacity>
                </SafeAreaView>
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
                                this.props.navigation.navigate('Label');
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
            
                <View style={styles.container}>  
                        
                        <View style={styles.header}>
                            {/* <View style={styles.newgame}>
                                <Button style={styles.button} onPress={()=>this.newStartGame()} title="New"></Button>
                            </View> */}
                            <View style={styles.reset}>
                                <Button style={styles.button} onPress={()=>this.reset()} title="Reset"></Button>
                            </View>
                            <View style={styles.stepes}>
                                <Text style={{fontSize:18}}> Steps: {stepes}</Text>
                            </View>
                            <View style={styles.counter}>                                
                                <Text style={{fontSize:18}} >Time(s): {time}</Text>
                            </View> 
                        </View>
                        <View style={styles.containerInner}>         
                            {this.state.GridListItems.map((d,i)=>(
                                <TouchableWithoutFeedback key={i}
                                    number='0.1'                                  
                                    onPress={()=>{
                                        if(d.activeEvent === 1)
                                        this.changeHendler(d.key,d.pos,d.activeEvent)
                                    }}>
                                    <View style={d.hidden==0?styles.boxEmpty: d.key == i+1 ? styles.rightpos:styles.box }>
                                        <Text style={styles.text}>{d.hidden==0?'':d.key}</Text>
                                    </View>
                                        
                                </TouchableWithoutFeedback>                        
                            ))}
                        </View> 
                </View>
            </View>
           
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      
      justifyContent: "center",
      flexDirection:'row',
      flexWrap:'wrap',  
      marginTop:100,
      marginBottom:30,

    },
    box:{
 
        width: '25%',
        height:'27%',
        backgroundColor:'#D01C1FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'white',
        borderEndColor:'white',
        borderWidth:2,
        borderRadius:14,
        

    },
    rightpos:{
  
        width: '25%',
        height:'27%',
        backgroundColor:'#7DB46CFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'white',
        borderEndColor:'white',
        borderWidth:1,
        borderRadius:14,       

    },
    containerInner:{
        justifyContent: "center",
        flexDirection:'row',
        flexWrap:'wrap',  
        marginTop:30,
        marginBottom:150,
        height:'70%',
        borderRadius:14,
    },
    header:{
        flexDirection:'row',
        width:'100%'
        
    },
    newgame:{
        width:'20%',
        marginLeft:6
    },
    counter:{
        width:'40%',
        justifyContent:'flex-start',
        //backgroundColor:'gray', 
        //marginHorizontal:10,
    },
    reset:{
        width:'20%',
        marginHorizontal:10,
    },
    stepes:{
        width:'35%',
        //marginHorizontal:10,
    },
    boxEmpty:{
        // flex: 2,
        width: '25%',
        height:'27%',
        backgroundColor:'white',
        borderColor:'white',
        borderEndColor:'white',
        borderWidth:1,
        borderRadius:14,
    },
    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    },
    GridViewContainer: {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     height: 100,
     margin: 5,
     backgroundColor: '#7B1FA2'
  },
  GridViewTextLayout: {
     fontSize: 20,
     fontWeight: 'bold',
     justifyContent: 'center',
     color: '#fff',
     padding: 10,
   },
   text:{
       fontSize:26,
       color:'white',
       
   },
   button:{
        borderRadius:14,
   }
  });
  
export default Grid;