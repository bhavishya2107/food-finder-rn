import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import AppCard from "../components/AppCard";

const ResultsList = ({ title, results }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return <AppCard result={item} />;
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  container: {
    width: "100%",
  },
});
