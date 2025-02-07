import axios from "axios";

const fetcher = async url => {
  const options = {
    url,
    method: "GET",
    Accept: "application/json",
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST
    }
  };

  try {
    const time = performance.now();
    const response = await axios.request(options);
    return { message: response.data.message, time };
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetcher;
