import { items } from "../components/data";
import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "../components/commons";
import NftHomeSection from "../components/nfthomesection/nftHomeSection";

export default function Home() {
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
        <NftHomeSection items={items}></NftHomeSection>
      </S.Container>
    </>
  );
}
