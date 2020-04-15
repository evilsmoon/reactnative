import React,{useRef} from "react";
import { StyleSheet, Image  , Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../components/Account/RegisterForm";
import Toast from 'react-native-easy-toast';

export default function register() {
  const toastRef = useRef();
  return (
    <KeyboardAwareScrollView>
      <Image
         source={require("../../../assets/img/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.viewForm}>
        <RegisterForm  toastRef={toastRef}/>
      </View>
      <Toast  ref={toastRef} possition='center' opacity={0.5}/>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
});