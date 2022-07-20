import { useQuery } from "react-query";

import axios from "axios";

export const useSearchGif = () => {
  const baseURl =
    "https://api.giphy.com/v1/gifs/search?api_key=vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8&q=Coding&limit=5";
  return useQuery({
    queryFn: async () => {
      const response = await axios.get(baseURl);

      return response.data.data as string[];
    },
  });
};
