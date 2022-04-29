import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

const AccordionItem = ({ prj, active, onToggle }) => {
  const { title, description } = prj;
  const contentEl = useRef();
  const [contentHeight, setContentHeight] = useState(contentEl);

  useEffect(() => {
    setContentHeight(contentEl.current.scrollHeight);
  }, []);

  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <Opener onClick={onToggle}>
        {title}
        <span className="control">{active ? "—" : "+"} </span>
      </Opener>

      <ContentWrapper
        ref={contentEl}
        contentHeight={contentHeight}
        active={active}
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
  height: ${(props) => (props.active ? `${props.contentHeight}px` : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-out;
`;

const Description = styled.div`
  padding: 1em;
`;

export default AccordionItem;
