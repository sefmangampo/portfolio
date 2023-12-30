import { useContext } from "react";
import { PageDataContext } from "../data";

export const usePageInfo = () => {
  const pageInfo = useContext(PageDataContext);

  return pageInfo;
};
