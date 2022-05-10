import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fbf6ec;
`;
export const Container = styled.div`
  max-width: ${(props) => (props.fullwidth ? "none" : "75rem")};
  margin: 0 auto;
  padding-top: 5em;
`;

export const Navbar = styled.div`
  position: fixed;
  width: 100%;
  padding: 0.1em;
`;

export const Button = styled.button`
  background: #000;
  color: #fff;
  padding: 0.8em 1em;
  border: 0;
  border-radius: 2em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.1rem;
  display: inline-block;
  align-self: baseline;
  margin: 0.5em 0;
  @media (max-width: 48em) {
    align-self: normal;
  }
`;

export const Logo = styled.div`
  display: inline-block;
  line-height: 1;
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  margin: 1vw;
  padding: 5px 20px;
  border: 3px solid #222;
  border-radius: 1em;
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
