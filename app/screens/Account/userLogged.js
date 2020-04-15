import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
export default function userLogged() {
  const logout = ()=>{
    firebase.auth().signOut().then(()=>{
      console.log('cerrar session')
    }).catch(()=>{
      console.log('error al cerrar session')
    })
  }
  return (
    <View>
      <Text> userLogged ... </Text>
      <Button title='logout'
      onPress={logout}/>
    </View>
  );
}
