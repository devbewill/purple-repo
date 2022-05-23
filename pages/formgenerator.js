import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "../components/commons";
import { quadriPF } from "../components/data";
import FormGenerator from "../components/formGenerator/formGenerator";

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
      <S.Container fullwidth>
        <FormGenerator quadriPF={quadriPF}></FormGenerator>
      </S.Container>
    </>
  );
}

export default Home;
