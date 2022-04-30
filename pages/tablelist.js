import { items } from "./data";
import Link from "next/link";
import styled from "styled-components";
import {
  Container,
  Navbar,
  Logo,
  Typo,
  Title,
  Subtitle,
  Text,
} from "./components/commons";
import TableGrid from "./components/tablelist/tableGrid";
import Table from "./components/tablelist/table";

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
        <Typo>
          <Title>{parsedObj.title}</Title>
          <Subtitle>An example of Accordion</Subtitle>
          <Text>{parsedObj.description}</Text>
        </Typo>
      </Container>
      <Container fullwidth>
        <HeroTitle>Project List</HeroTitle>

        <TableGrid>
          {items.map((item, key) => {
            return (
              <Table
                key={key}
                title={item.title}
                text={item.text}
                picture={item.picture}
                description={item.description}
                link={item.link}
                location={item.location}
                tags={item.tag}
                year={item.year}
              ></Table>
            );
          })}
        </TableGrid>
      </Container>
    </>
  );
}

const HeroTitle = styled.div`
  font-size: 12vw;
  font-weight: 800;
  letter-spacing: -0.3vw;
  text-align: right;
  padding: 0 1rem;
`;

export default Home;
