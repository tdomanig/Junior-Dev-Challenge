import { useQuery } from "react-query";
import axios from "axios";

const baseURl =
  "https://api.giphy.com/v1/gifs/random?api_key=vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8";

export const useRandomGif = () => {
  return useQuery({
    queryFn: async () => {
      const response = await axios.get(baseURl);

      return response.data;
    },
  });
};
