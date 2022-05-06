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
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  color: #ff0060;
`;

// Typo block
export const Typo = styled.div`
  padding: 5em 0;
  font-family: "Lora", serif;
  font-weight: 100;
  max-width: 960px;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  margin-bottom: 0.6em;
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1.55;
`;
