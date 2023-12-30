import dynamic from "next/dynamic";
import AccordionItemRenderer from "./accordionItemRenderer";
import accordionTitleRenderer from "./accordionTitleRenderer";
import { usePageInfo } from "@/app/hooks";

const Accordion = dynamic(() => import("devextreme-react/accordion"), {
  ssr: true,
});

export const StackContents = () => {
  const { stackData } = usePageInfo();

  console.log("this be stack data", stackData);

  return (
    <>
      Hi from stack c ontest
      <Accordion
        dataSource={stackData}
        itemTitleRender={accordionTitleRenderer}
        itemRender={AccordionItemRenderer}
      />
    </>
  );
};
