import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import FoodDetails from "./src/screens/FoodDetails";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    FoodShow: FoodDetails,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Food Finder",
    },
  }
);

export default createAppContainer(navigator);
