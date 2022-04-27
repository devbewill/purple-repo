import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fbf6ec;
`;
export const Container = styled.div`
  max-width: ${(props) => (props.fullwidth ? "none" : "65rem")};
  margin: 0 auto;
  padding-top: 5em;
`;

export const Navbar = styled.div`
  position: fixed;
  width: 100%;
  padding: 0.1em;
`;

export const Logo = styled.div`
 font-family: "Saira Extra Condensed", sans-serif;
 padding: 0.5rem 1rem;
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  cursor pointer;
`;
