import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";
import { Button, StyleSheet, Text, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "clientId",
    scopes: ["email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log(authentication);
    }
  }, [response]);
  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title="Facebook Login"
        onPress={() => {
          promptAsync();
        }}
      />
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
