import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";

const AppCard = ({ result }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.subTitle}>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
    </View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.light,
    padding: 5,
  },
  detailsContainer: {
    paddingTop: 10,
  },
  title: {
    // marginBottom: 7,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 5,
  },
  subTitle: {
    color: colors.medium,
  },
});
