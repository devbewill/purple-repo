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

export default AccordionItem;
