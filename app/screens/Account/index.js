import React ,{useState,useEffect}from "react";
import { View,Text } from "react-native";
import * as firebase from 'firebase'; 
import Loading from '../../components/Loading';
import UserGuest from './userGuest';
import UserLogged from './userLogged';
export default function MyAccount() {
const [Login,setLogin] = useState(null);

useEffect(()=>{
firebase.auth().onAuthStateChanged(user=>{
  // console.log(user);

  !user ? setLogin(false):setLogin(true)
})
},[]);

  if(Login === null){
return  <Loading isVisible={true}text="Cargando" />
  }
  return Login ? <UserLogged /> : <UserGuest />;

}
