import React, { useState } from "react";
import "./global.css";
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { text } from "express";

// import "nativewind/css"; // Imprt NativeWind

// const Stack = createNativeStackNavigator();
export default function App() {
  const [Name, setName] = useState("");

  return (
    <NavigationContainer>
      <View style={styles.conainer}>
        <Text className="text-blue-600 text-2xl font-bold">
          Hello, Tailwind CSS! 🚀 nice work
        </Text>

        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={styles.image}
        />

        <TextInput
          placeholder="Enter your Name"
          onChangeText={function (text) {
            console.log("clicked");
            setName(text);
          }}
        ></TextInput>
        <Button title="Press Me" onPress={() => alert(`Hello, ${Name}!`)} />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    height: "100px",
    marginLeft: "100px",
    padding: "100px",
  },
});
