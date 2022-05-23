import "bootstrap/dist/css/bootstrap.min.css";
import "./Accordion.css";
import {
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import React from "react";
import { data } from "./data";
const Accordion = () => {
  return (
    <div className="accordion">
      <UncontrolledAccordion defaultOpen="1">
        {data.map((element, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionHeader targetId={element.targetId}>
                <strong>{element.question}</strong>
              </AccordionHeader>
              <AccordionBody accordionId={element.accordionId}>
                {element.answer}
              </AccordionBody>
            </AccordionItem>
          );
        })}
      </UncontrolledAccordion>
    </div>
  );
};
export default Accordion;
