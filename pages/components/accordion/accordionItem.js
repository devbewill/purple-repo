import styled from "styled-components";
import { useState, useRef } from "react";

const AccordionItem = ({ prj }) => {
  const contentEl = useRef();
  const [clicked, setClicked] = useState(false);
  const [contentHeight, setContentHeight] = useState(contentEl);
  const { title, description } = prj;

  const handleToggle = () => {
    setClicked((prev) => !prev);
    setContentHeight(contentEl.current.scrollHeight);
  };

  return (
    <li className={`accordion_item ${clicked ? "active" : ""}`}>
      <Opener onClick={handleToggle}>
        {title}
        <span className="control">{clicked ? "—" : "+"} </span>
      </Opener>

      <ContentWrapper
        clicked={clicked}
        contentHeight={contentHeight}
        ref={contentEl}
      >
        <Description>{description}</Description>
      </ContentWrapper>
    </li>
  );
};

const Opener = styled.button`
  text-align: left;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2em;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid #222;
  background: #fff;
`;

const ContentWrapper = styled.div`
  height: ${(props) => (props.clicked ? `${props.contentHeight}px` : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-out;
`;

const Description = styled.div`
  padding: 1em;
`;

export default AccordionItem;
