import { useQuery } from "react-query";
import axios from "axios";

const baseURl = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_OMDB_API_KEY}`;

export const useRandomGif = () => {
  return useQuery({
    queryFn: async () => {
      const response = await axios.get(baseURl);

      return response.data;
    },
  });
};
