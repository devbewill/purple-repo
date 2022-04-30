import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const query = router.query;
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
            <Title>{query.title}</Title>
            <Subtitle>An example of Accordion</Subtitle>
            <Text>{query.description}</Text>
          </Typo>

          <Accordion />
        </main>
      </Container>
    </>
  );
}

export default Home;
