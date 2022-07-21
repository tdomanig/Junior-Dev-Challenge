import { FC, ReactNode } from "react";
import { Header } from "./head";
import { GiphySearchForm } from "../features/giphySearch/giphySearch";
import { QueryClient, QueryClientProvider } from "react-query";
import { GiphyRandom } from "../features/giphyRandom/giphyRandom";

type LayoutProps = {
  children: ReactNode;
};

const queryClient1 = new QueryClient();
const queryClient2 = new QueryClient();
export const Layout: FC<LayoutProps> = () => {
  return (
    <div>
      <div>
        <QueryClientProvider client={queryClient1}>
          <Header></Header>
          <GiphyRandom></GiphyRandom>
        </QueryClientProvider>
      </div>
      <div>
        <QueryClientProvider client={queryClient2}>
          <GiphySearchForm></GiphySearchForm>
        </QueryClientProvider>
      </div>
    </div>
  );
};
