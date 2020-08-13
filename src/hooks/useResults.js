import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const searchAPI = async (searchTerm) => {

    if (searchTerm === "") {
      return;
    }

    setLoader(true);
    try {
      if (searchTerm === "") {
        return <Text>enter search term</Text>;
      }
      const res = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setLoader(false);
      setResults(res.data.businesses);
    } catch (error) {
     setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchAPI("food");
  }, []);
  return [searchAPI, results, errorMessage, loader];
};
