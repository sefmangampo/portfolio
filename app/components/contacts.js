import { forwardRef } from "react";
import SectionDecorator from "../decorator/section";

const Contacts = forwardRef(function Contacts(props, ref) {
  return (
    <SectionDecorator>
      <h1 ref={ref} data-page-number="4">
        <span className="hidden">4</span>
        This is the Contacts page
      </h1>
    </SectionDecorator>
  );
});

export default Contacts;
