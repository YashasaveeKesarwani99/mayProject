import React,{ useEffect,useState } from 'react'
import {   Text,
    View,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Header} from 'react-native'
import * as firebase from 'firebase';
import NewProfile from './newProfile'
import ShowProfile from './showProfile';
//import {fireConfig,FireDb} from '../../utils/fbConfig'

//uid and fb in props
const profile = (props)=>{
    console.log(props.uid)
    const [snap,setSnap] = useState();
    const [loading, setLoading] = useState(true);
    //const [loaded, setLoaded] = useState(false);
   // const [fullProfile,setFullProfile] = useState()

    useEffect(()=>{

        firebase.database().ref('worker/' + props.uid).once('value', snap=>{
            setSnap(snap.val())
            console.log(snap)
            setLoading(false)
            //const snapshot = []
            //snapshot.push(snap)
        }).catch(err=>console.log(err))

    },[props.uid])

    //assigning snap from edit component
    const settingSnap =(e)=>{
        setSnap(e)
    }

    //setting loaded state
    // const settingLoaded =(e)=>{
    //     var newLoaded = loaded
    //     setLoaded(!newLoaded)
    // }

    if(loading)
    {
        return(
            <View style={{
                display:'flex',
                alignContent:'center',
                margin:20,
                marginTop:150
            }} >
                <Text style={{fontSize:25,textAlign:'center'}}>Loading...</Text>
            </View>
        )
    }
    else{
        return(
            <View>
                {(snap)
                 ?
                 <ShowProfile uid={props.uid} settingSnap={settingSnap} snap={snap}/>
                :
                 <NewProfile uid={props.uid}  />
                }
            </View>
        )
    }

}
export default profile;