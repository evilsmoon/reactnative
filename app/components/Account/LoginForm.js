import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

import * as firebase from "firebase";
import Loading from "../Loading";
import { withNavigation } from "react-navigation";
import { validateEmail } from "../../utils/Validation";

function LoginForm (props) {
  const [hidePassword, sethidePassword] = useState(true);
  const { toastRef, navigation } = props;
  const [email, setemail] = useState("");
  const [isVisibleLoading, setisVisibleLoading] = useState(false);
  const [password, setpassword] = useState("");

  const login_ = async () => {
    setisVisibleLoading(true);
    if (!email || !password) {
      console.log("Todos los campos son obligatorios");
      toastRef.current.show("Todos los campos son obligatorios");
    } else {
      if (!validateEmail(email)) {
        console.log("email incorrecto");
        toastRef.current.show("email incorrecto");
      } else {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            navigation.navigate("MyAccount");
          })
          .catch(() => {
            console.log("error al crear usuario");
            toastRef.current.show("error al crear usuario");
          });
      }
    }

    setisVisibleLoading(false);
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="email"
        containerStyle={styles.inputFrom}
        onChange={(e) => setemail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRigth}
          />
        }
      />
      <Input
        placeholder="password"
        containerStyle={styles.inputFrom}
        password={true}
        secureTextEntry={hidePassword}
        onChange={(e) => setpassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRigth}
            onPress={() => sethidePassword(!hidePassword)}
          />
        }
      />

      <Button
        title="sing in"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={login_}
      />
      <Loading text="Login..." isVisible={isVisibleLoading} />
    </View>
  );
};

export default withNavigation(LoginForm);

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputFrom: {
    width: "100%",
    marginTop: 20,
  },
  iconRigth: {
    color: "#c1c1c1",
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: "#00a680",
  },
});
