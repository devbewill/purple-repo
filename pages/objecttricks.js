import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./components/commons";
import { items } from "./data";
import ObjectTricks from "./components/objecttricks/objectTricks";

function Home() {
  const router = useRouter();
  const query = router.query;
  return (
    <>
      <S.Navbar>
        <Link href="/">
          <S.Logo>DFHTDI</S.Logo>
        </Link>
      </S.Navbar>
      <S.Container fullwidth>
        <S.Typo>
          <S.Title>{query.title}</S.Title>
          <S.Subtitle>An example of Accordion</S.Subtitle>
          <S.Text>{query.description}</S.Text>
        </S.Typo>

        <ObjectTricks items={items}></ObjectTricks>
      </S.Container>
    </>
  );
}

export default Home;
