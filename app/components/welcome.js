import { forwardRef } from "react";
import SectionDecorator from "../decorator/section";

const Welcome = forwardRef(function Welcome(props, ref) {
  return (
    <SectionDecorator>
      <h1 ref={ref} data-page-number="1">
        <span className="hidden">1</span>
        This is the Welcome page
      </h1>
      <h2>add something here</h2>
    </SectionDecorator>
  );
});

export default Welcome;
