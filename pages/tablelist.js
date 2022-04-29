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
  return (
    <>
      <Navbar>
        <Link href="/">
          <Logo>DFHTDI</Logo>
        </Link>
      </Navbar>
      <Container>
        <Typo>
          <Title>Accordion UX & Usability</Title>
          <Subtitle>An example of Accordion</Subtitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque est
            repellat officiis nesciunt magnam incidunt mollitia consectetur eos
            maxime ipsam iure optio, minima facilis. In quis mollitia unde nam
            vero!
          </Text>
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
