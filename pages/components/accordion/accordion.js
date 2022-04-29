import styled from "styled-components";
import { useState, useRef } from "react";
import { project } from "../../data";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <StyledAccordion>
      {project.map((prj, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          prj={prj}
        />
      ))}
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div`
  margin: 1em 0;
  list-style-type: none;
`;

export default Accordion;
