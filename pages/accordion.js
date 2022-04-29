import { project } from "./data";
import Link from "next/link";
import { Container, Navbar, Logo } from "./components/commons";
import Accordion from "./components/accordion/accordion";

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
          <h1 className="title">Accordion</h1>

          <p className="description">
            Component name: <code className="code">accordion</code>
          </p>

          {/* <ul className="accordion">
            {project.map((prj, index) => (
              <AccordionItem key={index} prj={prj} />
            ))}
          </ul> */}

          <Accordion />
        </main>
      </Container>
    </>
  );
}
