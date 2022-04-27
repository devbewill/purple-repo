import { items } from "./data";
import Link from "next/link";
import styled from "styled-components";
import { Container, Navbar, Logo } from "./components/commons";
import TableGrid from "./components/tablelist/tableGrid";
import Table from "./components/tablelist/table";

const HeroTitle = styled.div`
  font-size: 12vw;
  font-weight: 800;
  letter-spacing: -0.3vw;
  text-align: right;
  padding: 0 1rem;
`;
export default function Home() {
  return (
    <>
      <Navbar>
        <Link href="/">
          <Logo>Purple</Logo>
        </Link>
      </Navbar>
      <Container fullwidth>
        <h1 className="title">Tablelist</h1>

        <p className="description">
          Component name: <code className="code">tablelist</code>
        </p>

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
