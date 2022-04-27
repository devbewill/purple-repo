import Head from "next/head";
import Link from "next/link";
import { project } from "./data";
import Project from "./components/home/project";
import { Navbar, Logo } from "./components/commons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Purple Inspiration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <Link href="/">
          <Logo>DFHTDI</Logo>
        </Link>
      </Navbar>
      <div className="home">
        <div className="info">
          <div className="inner">
            <h3>Don't Forget How To Do It</h3>
            <p>
              A personal repository designed with the purpose of not forgetting
              (as usual) all that I see around the web and that I promise I will
              implement in my next project.<br></br>
              <br></br>Perhaps in the near future I will add articles to support
              each project to share its peculiarity. <br></br> <br></br>
              Stay tuned!
            </p>
          </div>
        </div>
        <div className="list">
          <ul>
            {project.map((item, key) => {
              return (
                <Project
                  key={key}
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
        </div>
      </div>
    </div>
  );
}
