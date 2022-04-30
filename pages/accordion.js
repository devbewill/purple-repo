import Link from "next/link";
import {
  Container,
  Navbar,
  Logo,
  Typo,
  Title,
  Subtitle,
  Text,
} from "./components/commons";
import Accordion from "./components/accordion/accordion";

function Home() {
  const getLocalStorage = localStorage.getItem("obj");
  const parsedObj = JSON.parse(getLocalStorage);
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
            <Title>{parsedObj.title}</Title>
            <Subtitle>An example of Accordion</Subtitle>
            <Text>{parsedObj.description}</Text>
          </Typo>

          <Accordion />
        </main>
      </Container>
    </>
  );
}

export default Home;
