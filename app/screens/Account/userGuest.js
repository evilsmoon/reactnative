import React from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import { Button } from "react-native-elements";
export default function userGuest() {
  return (
    <ScrollView style={style.viewBody} centerContent={true}>
      <Image
        source={require("../../../assets/img/original.jpg")}
        style={style.image}
        resizeMode="contain"
      />
      <Text style={style.title}>Consulta tu perfil de 5 tenedores</Text>
      <Text style={style.description}>Describe tu restaurante</Text>
      <View style={style.viewBnt}>
        <Button
          buttonStyle={style.btnStyle}
          containerStyle={style.btnContainer}
          title="ver tu perfil"
          onPress={() => console.log("hello Word")}
        />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewBnt: {
    flex: 1,
    alignItems: "center",

  },
  btnStyle: {
    backgroundColor: "#00a680",
    
  },
  btnContainer: {
    width: "70%",
  },
});
