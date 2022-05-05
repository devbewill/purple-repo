import Link from "next/link";
import { useRouter } from "next/router";
import { project } from "./data";
import Project from "./components/scrollableList/scrollableList";
import styled from "styled-components";
import * as S from "./components/commons";

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
        <S.Typo>
          <S.Title>{query.title}</S.Title>
          <S.Subtitle>An example of Accordion</S.Subtitle>
          <S.Text>{query.description}</S.Text>
        </S.Typo>
      </S.Container>
      <S.Container fullwidth>
        <StyledInfo>
          <StyledInner>
            <h3>Don't Forget How To Do It</h3>
            <p>
              A personal XXX designed with the purpose of not forgetting (as
              usual) all that I see around the web and that I promise I will
              implement in my next project.<br></br>
              <br></br>Perhaps in the near future I will add articles to support
              each project to share its peculiarity. <br></br> <br></br>
              Stay tuned!
            </p>
          </StyledInner>
        </StyledInfo>
        <StyledList>
          <ul>
            {project.map((item, index) => {
              return (
                <Project
                  key={index}
                  idx={index}
                  title={item.title}
                  text={item.text}
                  picture={item.picture}
                  description={item.description}
                  link={item.link}
                  location={item.location}
                  tags={item.tag}
                  date={item.date}
                ></Project>
              );
            })}
          </ul>
        </StyledList>
      </S.Container>
    </>
  );
}

const StyledInfo = styled.div`
  width: 100%;

  @media (min-width: 40rem) {
    float: left;
    position: sticky;
    top: 0;
    width: 50%;
    height: 100vh;
  }
`;

const StyledInner = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
  line-height: 1.3;
  top: 100px;

  @media (min-width: 40rem) {
    max-width: 500px;
    top: 50%;
    transform: translateY(-50%);
    padding: 40px;
    left: 0;
  }
`;

const StyledList = styled.div`
  width: 100%;
  display: inline-block;
  margin-top: 50px;
  padding: 10px;

  ul {
    padding: 1em 5px;
    list-style: none;

    @media (min-width: 40rem) {
      padding: 1em 1.5em 1em 0;
    }
  }

  @media (min-width: 40rem) {
    width: 50%;
  }
`;
