import Link from "next/link";
import styled from "styled-components";
import { Container, Navbar, Logo } from "./components/commons";
import Accordion from "./components/accordion/accordion";

function Home() {
  return (
    <>
      <Navbar>
        <Link href="/">
          <Logo>DFHTDI</Logo>
        </Link>
      </Navbar>
      <Container>
        <main className="main">
          <Typo>
            <h1>Accordion UX & Usability</h1>
            <p className="subtitle">An example of Accordion</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque est
              repellat officiis nesciunt magnam incidunt mollitia consectetur
              eos maxime ipsam iure optio, minima facilis. In quis mollitia unde
              nam vero!
            </p>
          </Typo>

          <Accordion />
        </main>
      </Container>
    </>
  );
}

const Typo = styled.div`
  padding: 5em 0;
  font-family: "Lora", serif;
  font-weight: 100;
  max-width: 960px;

  h1 {
    font-size: 4rem;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    margin-bottom: 0.6em;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.55;
  }

  .subtitle {
    font-weight: 600;
  }
`;

export default Home;
