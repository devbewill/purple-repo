import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./components/commons";
import { items } from "./data";
import InlineForm from "./components/inlineForm/inlineForm";

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
      {/* <S.Container fullwidth style={{ backgroundColor: "#ffe151" }}> */}
      <S.Container fullwidth style={{ backgroundColor: "#fffcee" }}>
        <main className="main">
          <InlineForm items={items}></InlineForm>
        </main>
      </S.Container>
    </>
  );
}

export default Home;
