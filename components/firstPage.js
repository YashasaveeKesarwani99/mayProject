import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

const FirstPage = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.initialApp}>
                <Text style={styles.appText}>Initial App</Text>
            </View>
            <View style={styles.login}>
            <Link to="/login">
          <Text style={styles.loginText}>Login</Text>
        </Link>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    initialApp:{
    },
    appText:{
        fontSize: 60,
        color: 'white'
    },
    login:{
        backgroundColor: 'white',
        width: 150,
        height: 50,
        borderRadius: 5
    },
    loginText:{
        textAlign:'center',
        marginTop: 10,
        fontSize: 20,
        height: 50
    }

})

export default FirstPage;