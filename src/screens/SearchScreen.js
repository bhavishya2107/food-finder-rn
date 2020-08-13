import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import Screen from "../components/Screen";
import ResultsList from "../components/ResultsList";
import Loader from "../components/Loader";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage, loader] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <Screen>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}

      {loader ? (
        <Loader />
      ) : (
        <ScrollView>
          <ResultsList
            results={filterResultsByPrice("$")}
            title="Cost Effective"
          />
          <ResultsList
            results={filterResultsByPrice("$$")}
            title="Bit Pricier"
          />
          <ResultsList
            results={filterResultsByPrice("$$$")}
            title="Big Spender"
          />
          <ResultsList
            results={filterResultsByPrice("$$$$")}
            title="Big Spender"
          />
        </ScrollView>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default SearchScreen;
