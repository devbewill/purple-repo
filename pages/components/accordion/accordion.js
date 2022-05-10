import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { project } from "../../data";

const Accordion = () => {
  const contentEl = useRef();
  const [clicked, setClicked] = useState("0");
  const [contentHeight, setContentHeight] = useState(contentEl);

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  useEffect(() => {
    setContentHeight(contentEl.current.scrollHeight);
  }, []);

  return (
    <StyledAccordion>
      {project.map((prj, index) => {
        const { title, text, location, description, date } = prj;

        return (
          <StyledItem className={clicked === index ? "active" : ""} key={index}>
            <StyledButton onClick={() => handleToggle(index)}>
              <div className="title">{title}</div>
              <div className="text">{text}</div>
              <div>{location}</div>
              <div>{date}</div>
              <span>{clicked === index ? "—" : "+"} </span>
            </StyledButton>

            <StyledContent
              ref={contentEl}
              contentHeight={contentHeight}
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
  text-align: left;
  border: 2px solid #000;
  border-bottom: 0;
  display: flex;
  justify-content: end;
  width: 100%;
  cursor: pointer;
  background: transparent;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  .title {
    font-weight: 600;
    font-family: "Saira Extra Condensed";
    font-size: 3rem;
    width: 30%;
  }

  .text {
    font-size: 1.9rem;
  }

  div {
    width: 20%;
  }

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

const StyledItemRow = styled.div``;

const StyledDescription = styled.div`
  background: rgb(251 216 38);
  font-size: 1.5rem;
  padding: 1.5em;
  border: 2px solid #000;
  border-bottom: 0;
`;

export default Accordion;
