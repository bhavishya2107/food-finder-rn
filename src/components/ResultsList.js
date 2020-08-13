import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import AppCard from "../components/AppCard";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
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
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("FoodShow", { id: item.id })}
              >
                <AppCard result={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  container: {
    width: "100%",
  },
});
