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
            <Title>Accordion UX & Usability</Title>
            <Subtitle>An example of Accordion</Subtitle>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque est
              repellat officiis nesciunt magnam incidunt mollitia consectetur
              eos maxime ipsam iure optio, minima facilis. In quis mollitia unde
              nam vero!
            </Text>
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
