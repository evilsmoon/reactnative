import React,{useRef}  from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import LoginFrom from '../../components/Account/LoginForm';
import LoginFacebook from '../../components/Account/LoginFacebook';
import Toast from 'react-native-easy-toast';
export default function login(props) {
const {navigation} =props;
const toastRef = useRef();

  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <LoginFrom navigation={navigation} toastRef={toastRef}/>
        <CreateAccount navigation={navigation} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.viewContainer}>
        <LoginFacebook toastRef={toastRef}  navigation={navigation}/>
      </View>
      <Toast  ref={toastRef} possition='center' opacity={0.5}/>

    </ScrollView>
  );
}
function CreateAccount(props) {
        const {navigation } = props;
        return (
          <Text style={styles.textRegister}>
            aun no tienes una cuenta?{" "}
            <Text style={styles.btnRegister} onPress={() => navigation.navigate("Register")}>
              Registrate
            </Text>
          </Text>
        );
      } 

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 250,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});


