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

  const welcomeRef = useRef(null);
  const stackRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry, index) => {
          console.log(index, entry.isIntersecting, entry.target.innerHTML);
        });
      },
      {
        rootMargin: "0px 0px -100%",
        threshold: 0,
      }
    );

    if (welcomeRef.current) observer.observe(welcomeRef.current);
    if (stackRef.current) observer.observe(stackRef.current);
    if (expRef.current) observer.observe(expRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
  }, []);

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
