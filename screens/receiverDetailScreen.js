import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class ReceiverDetailScreen extends Component{
    constructor(props){
        super(props)
        this.state= {
            userId: firebase.auth().currentUser.email,
            receiverId: this.props.navigation.getParam('details')["user_id"],
            requestId: this.props.navigation.getParam('details')["request_id"],
            bookName: this.props.navigation.getparam('details')["book_name"],
            reason_for_requesting: this.props.navigtaion.getParam('details')["reason_to_request"],
            receiverName: '',
            receiverContact: '',
            receiverAddress: '',
            receiverRequestDocId: '',
        }
    }

    getReceiverDetails= ()=>{
        db.collection('users').where("email_id", "==", this.state.receiverId).get()
        .then(snapshot=>{
            snapshot.foreach(doc=>{
                this.setState({
                    receiverName: doc.data().first_name,
                    receiverContact: doc.data().contact,
                    receiverAddress: doc.data().address,

                })
            })    
        })

        db.collection('requested_books').where("request_id", "==", this.state.request_id).get()
        .then(snapshot=>{
            snapshot.foreach(doc=>{
                this.setState({
                    receiverRequestDocId: doc.id
                })
            })
        })
    }

    updateBookStatus= ()=>{
        db.collection('all_donations').add({
            book_name: this.state.bookName,
            request_id: this.state.requestId,
            requested_by: this.state.receiverName,
            donor_id: this.state.userId,
            request_status: "Donor Interested"
        })
    }

    componentDidMount(){
        this.getUserDetails()
    }
    render(){
        return(
            <View style= {styles.container}>
                <View style= {{flex:0.1}}>
                <Header
                leftComponent={<Icon name='arrow-left' type= 'leather' color= '#696969' 
                onPress={()=>this.props.navigation.goBack}
                />}
                centerComponent={{text: "Donate Books", style:{color: '#90a5a9', fontSize:20, fontweight: 'bold'}}}
                backgroundColor= '#eaf8fe'
                />
                </View>
                <View style={{flex:0.3}}>
                    <Card 
                    title={"Book Information"}
                    titleStyle={{fontSize:20}}
                    > 
                    <Card>
                        <Text style= {{fontweight: 'bold'}}> name: {this.state.bookName} </Text>
                    </Card>
                    <Card>
                        <Text style={{fontweight: 'bold'}}> reason: {this.state.reason_for_requesting}</Text>
                    </Card>
                    </Card>
                </View>
                <View style= {{flex: 0.3}}>
                    <Card
                title={"Receiver Information"}
                titleStyle={{fontSize:20}}>
                    <Card>
                     <Text style= {{fontweight: 'bold'}}> name: {this.state.receiverName} </Text>
                    </Card> 
                    <Card>
                    <Text style= {{fontweight: 'bold'}}> contact: {this.state.contact} </Text>
                    </Card>
                    <Card> 
                        <Text style= {{fontweight: 'bold'}}> address: {this.state.address} </Text>
                    </Card>
                </Card>
                </View>
                <View style= {styles.buttonContainer}>
                    {
                        this.state.receiverId !== this.state.userId
                        ?(
                            <TouchableOpacity style= {styles.button}
                            onPress={()=>{
                                this.updateBookStatus()
                                this.addNotifications()
                                this.props.navigation.navigate('MyDonations')
                            }}>
                                <Text> I want to donate </Text>
                            </TouchableOpacity>
                        ): (

                        )
                    }
                </View>
            </View>
        )
    }
}

const Styles= StyleSheet.create({ 
    container: { flex:1, }, 
    buttonContainer : { flex:0.3, justifyContent:'center', alignItems:'center' }, 
    button:{ width:200, height:50, justifyContent:'center', alignItems : 'center', 
    borderRadius: 10, backgroundColor: 'orange', shadowColor: "#000", 
    shadowOffset: { width: 0, height: 8 }, 
    elevation : 16 
} 
})