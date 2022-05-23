import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function ObjectTricks({ items }) {
  //   const contentEl = useRef([]);
  const [clicked, setClicked] = useState();

  const handleToggle = (key) => {
    if (clicked === key) {
      return setClicked(node);
    }
    setClicked(key);
  };

  return (
    <StyledGrid xl={2}>
      {items.map((post, key) => {
        const { text, description, picture } = post;
        return (
          <Button
            // ref={(node) => (contentEl.current[key] = node)}
            onClick={() => handleToggle(key)}
            clicked={clicked === key ? key : "not set"}
          >
            {text}
          </Button>
        );
      })}
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(${(props) => props.sm}, minmax(0, 1fr));
  padding: 1em;

  @media (min-width: 65rem) {
    grid-template-columns: repeat(${(props) => props.xl}, minmax(0, 1fr));
  }
`;

const Button = styled.button`
  background: ${(props) =>
    props.clicked === "not set" ? "hotpink" : "yellow"};
  font-size: 1em;
  padding: 1em;
  border: 0;
  text-transform: uppercase;
`;

export default ObjectTricks;
