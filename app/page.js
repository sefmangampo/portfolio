"use client";

import { useEffect, useReducer, useRef } from "react";
import {
  Contacts,
  Experience,
  Stack,
  Welcome,
  NavigationBullets,
} from "./components";

import {
  PageDataContext,
  PageDispatchContext,
  pageData,
  pageReducer,
} from "./data";

export default function Home() {
  const [pageInfo, dispatch] = useReducer(pageReducer, pageData);

  const { selectedPage } = pageInfo;

  const welcomeRef = useRef(null);
  const stackRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const scrollToView = (ref, index) => {
      if (index == selectedPage) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // const set

    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry, index) => {
          if (entry.isIntersecting) {
            const pageNumber = entry.target.getAttribute("data-page-number");
            dispatch({
              type: "setSelectedPage",
              payload: pageNumber,
            });
          }
        });
      },
      {
        rootMargin: "0px 0px -100%",
        threshold: 0,
      }
    );

    if (welcomeRef.current) {
      observer.observe(welcomeRef.current);
      scrollToView(welcomeRef, 1);
    }
    if (stackRef.current) {
      observer.observe(stackRef.current);
      scrollToView(stackRef, 2);
    }
    if (expRef.current) {
      observer.observe(expRef.current);
      scrollToView(expRef, 3);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
      scrollToView(contactRef, 4);
    }
  }, [selectedPage]);

  return (
    <PageDataContext.Provider value={pageInfo}>
      <PageDispatchContext.Provider value={dispatch}>
        <main className=" relative">
          <div className="max-h-screen snap-y snap-mandatory overflow-y-scroll relative">
            <Welcome ref={welcomeRef} />
            <Stack ref={stackRef} />
            <Experience ref={expRef} />
            <Contacts ref={contactRef} />
          </div>
          <NavigationBullets />
        </main>
      </PageDispatchContext.Provider>
    </PageDataContext.Provider>
  );
}
