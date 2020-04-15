import React, { useState } from "react";
import { SocialIcon } from "react-native-elements";
import * as firebase from "firebase";
import * as Facebook from "expo-facebook";
import { Facebookapi } from "../../utils/Social";
import Loading from "../Loading";
import { withNavigation } from "react-navigation";
export default function LoginFacebook(props) {
  const { toastRef, navigation } = props;
  const [isVisibleLoading, setisVisibleLoading] = useState(false);

  async function logIn() {
    setisVisibleLoading(true);

    try {
      await Facebook.initializeAsync('207619314026888');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
    setisVisibleLoading(false);

  }

  // const login = async () => {
  //   setisVisibleLoading(true);

  //   const {
  //     type,
  //     token,
  //   } = await Facebook.initializeAsync(
  //     Facebookapi.application_id,
  //     { permissions: Facebookapi.permissions }
  //   );
  //   if (type == "success") {
  //     const credentials = firebase.auth.FacebookAuthProvider.credential(token);
  //     await firebase
  //       .auth()
  //       .signInWithCredential(credentials)
  //       .then(() => {
  //         navigation.navigate("MyAccount");
  //       })
  //       .catch(() => {
  //         console.log("error al iniciar session intenlo mas luego");
  //       });
  //   } else if (type == "cancel") {
  //     console.log("inicio de  session cancelado");
  //   } else {
  //     console.log("error desconocido, intentelo mas tarde");
  //   }
  //   setisVisibleLoading(false);
  // };
  return (
    <>
      <SocialIcon
        title="Sign In With Facebook"
        button
        type="facebook"
        onPress={logIn}
      />
      <Loading text="Login..." isVisible={isVisibleLoading} />
    </>
  );
}
