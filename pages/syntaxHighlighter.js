import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./components/commons";
import { items } from "./data";
import CodeBlock from "./components/syntaxHighLighter/codeblock";

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
      <S.Container fullwidth style={{ backgroundColor: "#fffcee" }}>
        <main className="main">
          <CodeBlock items={items}></CodeBlock>
        </main>
      </S.Container>
    </>
  );
}

export default Home;
