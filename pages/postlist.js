import { items } from "./data";
import Link from "next/link";
import {
  Container,
  Navbar,
  Logo,
  Typo,
  Title,
  Subtitle,
  Text,
} from "./components/commons";
import PostGrid from "./components/postlist/postGrid";
import Post from "./components/postlist/post";

export default function Home() {
  const getLocalStorage = localStorage.getItem("obj");
  const parsedObj = JSON.parse(getLocalStorage);
  return (
    <>
      <Navbar>
        <Link href="/">
          <Logo>DFHTDI</Logo>
        </Link>
      </Navbar>
      <Container>
        <main className="main">
          <Typo>
            <Title>{parsedObj.title}</Title>
            <Subtitle>An example of Accordion</Subtitle>
            <Text>{parsedObj.description}</Text>
          </Typo>

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
      </Container>
    </>
  );
}
