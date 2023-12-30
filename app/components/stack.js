import { forwardRef } from "react";
import SectionDecorator from "../decorator/section";
import { StackContents } from "./innerPages";

const Stack = forwardRef(function Stack(props, ref) {
  return (
    <SectionDecorator>
      <h1 ref={ref} data-page-number="2">
        <span className="hidden">2</span>
        This is the Stack page
      </h1>

      <StackContents />
    </SectionDecorator>
  );
});

export default Stack;
