import axios from "axios";

const fetchBooksByQuery = async (query, startIndex) =>
  await axios.get(process.env.REACT_APP_GOOGLE_API_URL, {
    params: {
      api_key: process.env.REACT_APP_GOOGLE_API_KEY,
      q: query,
      startIndex: startIndex,
      maxResults: 10,
    },
  });

export default fetchBooksByQuery;
