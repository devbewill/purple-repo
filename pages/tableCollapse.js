import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./components/commons";
import { items } from "./data";
import TableCollapse from "./components/tableCollapse/tableCollapse";

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
      <S.Container>
        <main className="main">
          <TableCollapse items={items}></TableCollapse>
        </main>
      </S.Container>
    </>
  );
}

export default Home;
