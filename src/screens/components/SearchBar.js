import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../components/Screen";
import colors from "../config/colors";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <Screen>
      <View style={styles.backgroundStyle}>
        <Feather style={styles.iconStyle} name="search" size={40} />
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search"
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
        />
      </View>
    </Screen>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "gainsboro",
    height: 50,
    borderRadius: 5,
    // marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
