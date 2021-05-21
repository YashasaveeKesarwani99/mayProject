import React,{ useEffect,useState } from 'react'
import { Text,
    View,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Header,
    Pressable} from 'react-native'
import EditProfile from './editProfile'

    const showProfile = (props)=>{
        
        const [update,setUpdate] = useState(true);

        const pressHandler = ()=>{
            var newUpdate = update
            setUpdate(!newUpdate)
        }

        return(
            <View>
            {update?
            <View>
            <View style={styles.container}>
            <View style={styles.labels}>
           <Text style={styles.labelleft}>Name</Text>
           <Text style={styles.labelright}>{props.snap.name}</Text>
           </View>
           <View style={styles.labels}>
           <Text style={styles.labelleft}>Contact</Text>
           <Text style={styles.labelright}>{props.snap.contact}</Text>
           </View>
           <View style={styles.labels}>
           <Text style={styles.labelleft}>Area</Text>
           <Text style={styles.labelright}>{props.snap.area}</Text>
           </View>
           <View style={styles.labels}>
           <Text style={styles.labelleft}>PIN</Text>
           <Text style={styles.labelright}>{props.snap.pin}</Text>
           </View>
           <View style={styles.labels}>
           <Text style={styles.labelleft}>Work</Text>
           <Text style={styles.labelright}>{props.snap.work}</Text>
           </View> 
        </View>
        <Pressable style={styles.button} onPress={pressHandler}>
                <Text style={{color:'white'}}>Update</Text>    
            </Pressable> 
        </View>
            :<EditProfile pressHandler={pressHandler} uid={props.uid} settingSnap={props.settingSnap}/>}
        </View>
        )
    }

    const styles = StyleSheet.create({
        container:{
            display:'flex',
            alignContent:'center',
            margin:20,
            marginTop:80,
            elevation:3,
            borderColor: 'grey'
        },
        labels:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        },
        labelleft:{
            fontSize:25,
            textAlign:'left',
            margin:20,
            marginLeft:40
        },
        labelright:{
            fontSize:25,
            textAlign:'right',
            margin:20,
            marginRight:25
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
export default showProfile;