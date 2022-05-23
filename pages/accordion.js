import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./components/commons";
import Accordion from "./components/accordion/accordion";

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

        <Accordion />
      </S.Container>
    </>
  );
}

export default Home;
