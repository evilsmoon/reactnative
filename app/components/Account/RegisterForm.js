import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

import { validateEmail } from "../../utils/Validation";
import * as firebase from "firebase";
import { withNavigation}from 'react-navigation';
import Loading from '../Loading';

  function RegisterForm(props) {
  // console.log(props);
  const { toastRef ,navigation } = props;
  // console.log(toastRef)
  const [hidePassword, sethidePassword] = useState(true);
  const [hideRePassword, sethideRePassword] = useState(true);
  const [isVisibleLoading,setisVisibleLoading] =useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");

  const register_ = async () => {
    setisVisibleLoading(true);
    if (!email || !password || !repassword) {
      console.log("Todos los campos son obligatorios");
      toastRef.current.show("Todos los campos son obligatorios");
    } else {
      if (!validateEmail(email)) {
        console.log("email incorrecto");
        toastRef.current.show("email incorrecto");
      } else {
        if (password !== repassword) {
          console.log("no son iguales las contrase;a");
          toastRef.current.show("no son iguales las contrase;a");
        } else {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              navigation.navigate("MyAccount");
              
            })
            .catch(() => {
              console.log("error al crear usuario");
              toastRef.current.show("error al crear usuario");
            });
        }
      }
    }
    setisVisibleLoading(false);
  };
  return (
    <View style={styles.formContainer} behavior="padding" enabled>
      <Input
        placeholder="email"
        containerStyle={styles.inputForm}
        onChange={(e) => setemail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="password"
        password={true}
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        onChange={(e) => setpassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => sethidePassword(!hidePassword)}
          />
        }
      />
      <Input
        placeholder="Re-password"
        password={true}
        secureTextEntry={hideRePassword}
        containerStyle={styles.inputForm}
        onChange={(e) => setrepassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hideRePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => sethideRePassword(!hideRePassword)}
          />
        }
      />
      <Button
        title="sing on"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={register_}
      />
      <Loading text="Creando Cuenta" isVisible={isVisibleLoading}/>
    </View>
  );
}
export default withNavigation(RegisterForm);
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  iconRight: {
    color: "#c1c1c1",
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#00a680",
  },
});
