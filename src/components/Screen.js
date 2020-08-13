import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
  },
});

export default Screen;
