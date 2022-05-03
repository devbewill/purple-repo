import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { project } from "../../data";

const Accordion = (props) => {
  const [clicked, setClicked] = useState("0");

  const contentEl = useRef();
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
        const { title, description } = prj;

        return (
          <li
            className={`accordion_item ${clicked === index ? "active" : ""}`}
            key={index}
          >
            <Opener onClick={() => handleToggle(index)}>
              {title}
              <span className="control">{clicked === index ? "—" : "+"} </span>
            </Opener>

            <ContentWrapper
              ref={contentEl}
              contentHeight={contentHeight}
              active={clicked === index}
            >
              <Description>{description}</Description>
            </ContentWrapper>
          </li>
        );
      })}
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div`
  margin: 1em 0;
  list-style-type: none;
`;

const Opener = styled.button`
  font-family: "Poppins";
  text-transform: uppercase;
  text-align: left;
  font-weight: 600;
  font-size: 1.5rem;
  border: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #fcd927;
  margin-top: 5px;
  padding: 1.5rem;
`;

const ContentWrapper = styled.div`
  height: ${(props) => (props.active ? `${props.contentHeight}px` : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-out;
`;

const Description = styled.div`
  background: rgb(251 216 38 / 20%);
  font-size: 1.5rem;
  padding: 1.5em;
`;

export default Accordion;
