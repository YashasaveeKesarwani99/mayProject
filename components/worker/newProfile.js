import React,{ useState } from 'react'
import {   Text,
    View,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Pressable,
    Header} from 'react-native'
import * as firebase from 'firebase'
import firebaseConfig from '../../utils/fbConfig';

    //uid and fb in props
const newProfile = (props)=>{

    //state management
    const [name, setName] = useState("");
    const [contact, setContact] = useState(0);
    const [area, setArea] = useState("");
    const [pin, setPin] = useState(0);
    const [work, setWork] = useState("");
    //const [Uid,setUid] = useState("")
    const submitHandler = (e)=>{
      //  setUid(props.uid)
        //console.log(Uid)
        var user = {
            name,
            contact,
            area,
            pin,
            work,
            uid:props.uid
        }

        firebase.database().ref('worker/' + props.uid).set(user).catch(error => {
            console.log(error.message)
        })

    }
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Enter the required Information</Text>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                onChange={(e)=>{setName(e.nativeEvent.text)}}
                value={name}
            /> 
            <Text style={styles.label}>Contact</Text>
            <TextInput
                style={styles.input}
                onChange={(e)=>{setContact(e.nativeEvent.text)}}
            /> 
            <Text style={styles.label}>Area</Text>
            <TextInput
                style={styles.input}
                onChange={e=>setArea(e.nativeEvent.text)}
                value={area}
            /> 
            <Text style={styles.label}>Pincode</Text>
            <TextInput
                style={styles.input}
                onChange={e=>setPin(e.nativeEvent.text)}
                //value={text}
            /> 
            <Text style={styles.label}>Type of work</Text>
            <TextInput
                style={styles.input}
                onChange={e=>setWork(e.nativeEvent.text)}
                //value={text}
            /> 
            <Pressable style={styles.button} onPress={submitHandler}>
                <Text style={{color:'white'}}>Submit</Text>    
            </Pressable>     
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        marginTop: 60,
       // alignItems:'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        borderBottomWidth: 1,
        marginLeft:20,
        marginRight:20,
        color:'grey',
        padding: 5
        
      },
      label:{
          marginLeft:20,
          fontSize:15,
          color:'black'
      },
      heading:{
        textAlign:'center',
        fontWeight:"900",
        fontSize:20,
        margin:10,
        color:'grey'
      },
      button:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        backgroundColor:'grey',
        marginLeft:20,
        marginRight:20,
        height:50,
        borderRadius:5
      }
})

export default newProfile;