import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList, Text, View, Alert } from "react-native";
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

class Grid extends Component{

    constructor(props){
        super(props);
        this.state = {
            max:15,
            min:0,
            GridListItems: [
              { key: 1, pos:0, hidden:1,activeEvent:0},
              { key: 2, pos:1, hidden:1,activeEvent:0},
              { key: 3, pos:2, hidden:1,activeEvent:0},
              { key: 4, pos:3, hidden:1,activeEvent:0},
              { key: 5, pos:4, hidden:1,activeEvent:0},
              { key: 6, pos:5, hidden:1,activeEvent:0},
              { key: 7, pos:6, hidden:1,activeEvent:0},
              { key: 8, pos:7, hidden:1,activeEvent:0},
              { key: 9, pos:8, hidden:1,activeEvent:0},
              { key: 10, pos:9, hidden:1,activeEvent:0},
              { key: 11, pos:10, hidden:1,activeEvent:0},
              { key: 12, pos:11, hidden:1,activeEvent:0},
              { key: 13, pos:12, hidden:1,activeEvent:0},
              { key: 14, pos:13, hidden:1,activeEvent:0},
              { key: 15, pos:14, hidden:1,activeEvent:0},
              { key: 16, pos:15, hidden:0,activeEvent:0},
             
            ]
          };
    }


    GetGridViewItem(item) {
        Alert.alert(item);
    }
    replaceAt =(array, index, value)=> {
        const ret = array.slice(0);
        ret[index] = value;
        return ret;
      }
    
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
        console.log("count="+count); 
        console.log(index);
        console.log("index="+index[0].pos); 
        return index;    
    }

    checkMoveEnable = (Emtindex) =>{
            const { min, max } = this.state;
            console.log('Emtindex'+Emtindex)
            if(Emtindex === min){
               this.setState(state=>{
                    let dd = state.GridListItems.map(d=>{
                            if(d.pos == 1){
                                d.activeEvent = 1
                            }else{
                                return d
                            }
                        })
                    return {
                        GridListItems: dd
                    }
                })
            }
            if(Emtindex === min){
                this.setState(state=>{
                     let dd = state.GridListItems.map(d=>{
                             if(d.pos == 1){
                                 d.activeEvent = 1
                             }else{
                                 return d
                             }
                         })
                     return {
                         GridListItems: dd
                     }
                 })
             }


           return false;
    }

    changeHendler(d,pos){


            console.log(d)
            console.log(pos)
            var Emtindex = this.fundtheempty(this.state.GridListItems)[0];
          
            var res = this.checkMoveEnable(Emtindex.pos,pos)

                console.log(res);
                console.log(Emtindex);

                var arrayData =  this.state.GridListItems[pos]
                console.log(arrayData);
                var emptydata = { key: Emtindex.key, pos:arrayData.pos, hidden:Emtindex.hidden }
                var arrsy =this.replaceAt(this.state.GridListItems,pos,emptydata)
                console.log(arrsy);
                console.log(Emtindex.pos)
                var changData = { key: arrayData.key, pos:Emtindex.pos, hidden:arrayData.hidden }
                arrsy = this.replaceAt(arrsy,Emtindex.pos,changData)
                console.log(arrsy);
                this.setState({GridListItems:arrsy})

                
       // return true;

            
    }

    arraySort = () =>{

        return numbers.sort((a, b) => a - b);

    }
    
    render(){


        return(

            <View style={styles.container}>               
                    {this.state.GridListItems.map((d,i)=>(
                        <View style={d.hidden==0?styles.boxEmpty: d.key == i+1 ? styles.rightpos:styles.box } onClick={()=>this.changeHendler(d.key,d.pos)}>
                                <Text>{d.hidden==0?'':d.key}</Text>
                        </View>                        
                    ))}
            </View>
           
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#e5e5e5",
      flexDirection:'row',
      flexWrap:'wrap',  
        marginTop:100,
        marginBottom:200,
      
    },
    box:{
        width:80,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'gray',
        borderEndColor:'gray',
        borderWidth:1,
        

    },
    rightpos:{
        width:80,
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'gray',
        borderEndColor:'gray',
        borderWidth:1,        

    },
    boxEmpty:{
        width:80,
        backgroundColor:'gray',
        borderColor:'gray',
        borderEndColor:'gray',
        borderWidth:1,

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
   }
  });
  
export default Grid;