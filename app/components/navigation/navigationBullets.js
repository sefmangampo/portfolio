import { useContext } from "react";

import NavigationCircles from "./navigationCircles";
import { PageDataContext, PageDispatchContext } from "@/app/data";

export default function NavigationBullets() {
  const { pages, selectedPage } = useContext(PageDataContext);
  const pageDispatch = useContext(PageDispatchContext);

  const clickHandler = (n) => {
    pageDispatch({
      type: "setSelectedPage",
      payload: n,
    });
  };

  return (
    <div className="absolute bottom-0">
      <ul>
        {pages.map((page) => (
          <li key={page.name}>
            <NavigationCircles
              number={page.number}
              dispatch={clickHandler}
              selected={page.number == selectedPage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
