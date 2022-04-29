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
    <ul className="accordion">
      {project.map((prj, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          prj={prj}
        />
      ))}
    </ul>
  );
};

export default Accordion;
