import { ForwardedRef, forwardRef } from "react";
import SectionDecorator from "../decorator/section";

const Experience = forwardRef(function Experience(props, ref) {
  return (
    <SectionDecorator>
      <h1 ref={ref}>This is the Experience page</h1>
    </SectionDecorator>
  );
});

export default Experience;
