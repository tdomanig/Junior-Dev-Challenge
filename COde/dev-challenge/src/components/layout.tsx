import { FC, ReactNode } from "react";
import { GiphySearch } from "../features/giphySearch/giphySearch";
type LayoutProps = {
  children: ReactNode;
};
export const Layout: FC<LayoutProps> = () => {
  return <GiphySearch />;
};
