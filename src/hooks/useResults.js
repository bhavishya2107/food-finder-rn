import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

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
  return [searchAPI, results, errorMessage];
};
