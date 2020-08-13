import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import Screen from "../components/Screen";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  console.log(results);

  const searchAPI = async (searchTerm) => {
    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(res.data.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchAPI("pasta");
  }, []);

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
