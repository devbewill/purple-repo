import { items } from "./data";
import Link from "next/link";
import { Container, Navbar, Logo } from "./components/commons";
import PostGrid from "./components/postlist/postGrid";
import Post from "./components/postlist/post";

export default function Home() {
  return (
    <>
      <Navbar>
        <Link href="/">
          <Logo>DFHTDI</Logo>
        </Link>
      </Navbar>
      <Container>
        <main className="main">
          <h1 className="title">Postlist</h1>

          <p className="description">
            Component name: <code className="code">postlist</code>
          </p>

          <PostGrid>
            {items.map((post, key) => {
              return (
                <Post
                  key={key}
                  title={post.title}
                  text={post.text}
                  picture={post.picture}
                ></Post>
              );
            })}
          </PostGrid>
        </main>
      </Container>
    </>
  );
}
