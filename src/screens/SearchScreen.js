import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import Screen from "../components/Screen";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage] = useResults();

  return (
    <Screen>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}
      {results.length ? (
        <Text>We have found {results.length} results.</Text>
      ) : null}
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default SearchScreen;
