import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Loading from "./Loading";
export default function App() {
  const [IsLoading, setIsLoadind] = useState(false);

  // effect
    useEffect(() => {
    console.log('ejecutando useEffect')
    console.log(`Loading : ${IsLoading} `)

  }, [IsLoading])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      {IsLoading === true && <Loading />}

      <Button title="update state" onPress={() => setIsLoadind(true)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
