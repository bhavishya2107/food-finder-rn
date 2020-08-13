import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import Loader from "../components/Loader";

const FoodDetails = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [foodImages, setFoodImages] = useState(null);
  const [loader, setLoader] = useState(false);

  const getFoodImages = async (id) => {
    setLoader(true);
    const res = await yelp.get(`/${id}`);
    setFoodImages(res.data);
    setLoader(false);
  };

  useEffect(() => {
    getFoodImages(id);
  }, []);

  if (!foodImages) {
    return null;
  }

  return (
    <>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 18,
          fontWeight: "bold",
          marginVertical: 10,
        }}
      >
        {foodImages.name}
      </Text>
      {loader ? (
        <Loader />
      ) : (
        <FlatList
          data={foodImages.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return (
              <View>
                <Image style={styles.image} source={{ uri: item }} />
              </View>
            );
          }}
        />
      )}
    </>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    marginVertical: 10,
    borderRadius: 5,
  },
});
