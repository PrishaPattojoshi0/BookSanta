import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {ListItems} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config.js';
import myHeader from '../components/myHeader';

export default class BookDonateScreen extends Component{
constructor(){
    super()
    this.state= {
        requestedBooksList: []
    }
    this.requestRef= null
}
 getRequestedBooksList= ()=>{
     this.requestRef= db.collection("requested_books")
     .onSnapshot((snapshot)=>{
         var requestedBooksList= snaphot.docs.map(document=>document.data())
         this.setState({
             requestedBooksList: requestedBooksList
         })
     })
 }
 componentDidMount(){
     this.getRequestedBooksList()
 }
componentWillUnmount(){
    this.requestRef()
}

keyExtractor= (item, index)=>index.toString()
renderItem= ({item,i})=>{
    return(
        <ListItem 
        key= {i}
        title= {item.book_name}
        subtitle= {item.reason_to_request}
        titleStyle={{color: 'black', fontWeight: 'bold'}}
        rightElement= {
            <TouchableOpacity style= {styles.button}> 
                <Text style= {{color: '#ffff'}}> View </Text>
            </TouchableOpacity>
        }
        bottomDivider
        />
    )
}
 render(){
     return(
        <View style= {{flex: 1}}>
        <myHeader title= "Donate Books" navigation= {this.props.navigation} />
        <View style= {{flex:1}}>
            {
                this.state.requestedBooksList===0
                ?(
                    <View style= {styles.subContainer}>
                        <Text style= {{fontSize: 20}}>
                            List of all requested books
                        </Text>
                    </View>
                )
                :(
                    <FlatList
                    keyExtractor= {this.keyExtractor}
                    data= {this.state.requestedBooksList}
                    renderItem= {this.renderItem}
                    />
                )
            }
        </View>
        </View>
     )
 }
} 

const styles = StyleSheet.create({ 
    subContainer:{ flex:1, fontSize: 20, justifyContent:'center', alignItems:'center' }, 
    button:{ width:100, height:30, justifyContent:'center', alignItems:'center', 
    backgroundColor:"#ff5722", shadowColor: "#000", 
    shadowOffset: { width: 0, height: 8 } 
} 
})
