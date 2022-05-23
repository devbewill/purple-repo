import { items } from "./data";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import * as S from "./components/commons";
import TableGrid from "./components/tablelist/tableGrid";

function Home() {
  const router = useRouter();
  const query = router.query;

  return (
    <>
      <S.Navbar>
        <Link href="/" passHref>
          <S.Logo>DFHTDI</S.Logo>
        </Link>
      </S.Navbar>
      <S.Container>
        <S.Typo>
          <S.Title>{query.title}</S.Title>
          <S.Subtitle>An example of Accordion</S.Subtitle>
          <S.Text>{query.description}</S.Text>
        </S.Typo>
      </S.Container>
      <S.Container fullwidth>
        <HeroTitle>Project List</HeroTitle>

        <TableGrid items={items}> </TableGrid>
      </S.Container>
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
