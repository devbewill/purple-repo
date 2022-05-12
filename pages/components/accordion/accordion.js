import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { project } from "../../data";

const Accordion = () => {
  const contentEl = useRef([]);
  const [clicked, setClicked] = useState();

  const handleToggle = (index, node) => {
    console.log(node);
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <StyledAccordion>
      {project.map((prj, index) => {
        const { title, text, location, description, date } = prj;

        return (
          <StyledItem className={clicked === index ? "active" : ""} key={index}>
            <StyledButton onClick={(node) => handleToggle(index, node)}>
              <StyledInfo>
                <div className="title">{title}</div>
                <div className="text">{text}</div>
                <div>{location}</div>
                <div>{date}</div>
              </StyledInfo>
              <span>{clicked === index ? "—" : "+"} </span>
            </StyledButton>

            <StyledContent
              ref={(node) => (contentEl.current[index] = node)}
              contentHeight={
                contentEl.current[index]
                  ? contentEl.current[index].scrollHeight
                  : 0
              }
              active={clicked === index}
            >
              <StyledDescription>{description}</StyledDescription>
            </StyledContent>
          </StyledItem>
        );
      })}
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div`
  margin: 1em 0;
  list-style-type: none;
`;

const StyledItem = styled.li``;
const StyledButton = styled.button`
  width: 100%;
  background: transparent;
  border: 2px solid #000;
  border-bottom: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    width: 100px;
    font-size: 3rem;
  }
`;

const StyledContent = styled.div`
  height: ${(props) => (props.active ? `${props.contentHeight}px` : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-out;
`;

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 0.5em 2em;
  text-align: left;
  font-size: 1.2rem;

  div {
    width: 20%;
  }

  .title {
    width: 35%;
    font-weight: 600;
    font-family: "Saira Extra Condensed";
    font-size: 3rem;
  }

  .text {
    font-size: 1.9rem;
  }
`;

const StyledDescription = styled.div`
  background: #fbc7c2;
  font-size: 1.5rem;
  padding: 1.5em;
  border: 2px solid #000;
  border-bottom: 0;
`;

export default Accordion;
