import { useQuery } from "react-query";
import axios from "axios";

export type giphyResultType = {
  data: {
    id: string;
    title: string;
    length: number;
    images: {
      original: {
        url: string;
      };
    };
  };
};

const baseURl = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_OMDB_API_KEY}`;

export const useRandomGif = () => {
  return useQuery({
    queryFn: async () => {
      const response = await axios.get(baseURl);

      return response.data as giphyResultType;
    },
  });
};
