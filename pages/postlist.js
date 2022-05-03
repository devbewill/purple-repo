import { items } from "./data";
import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./components/commons";
import PostGrid from "./components/postlist/postGrid";
import Post from "./components/postlist/post";

export default function Home() {
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
          <S.Typo>
            <S.Title>{query.title}</S.Title>
            <S.Subtitle>An example of Accordion</S.Subtitle>
            <S.Text>{query.description}</S.Text>
          </S.Typo>

          <PostGrid>
            {items.map((post, key) => {
              return (
                <Post
                  key={key}
                  text={post.text}
                  description={post.description}
                  picture={post.picture}
                ></Post>
              );
            })}
          </PostGrid>
        </main>
      </S.Container>
    </>
  );
}
