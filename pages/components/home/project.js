import Link from "next/link";
import styled from "styled-components";
import * as S from "../commons";

const Project = ({ title, description, link, tags, date }) => {
  return (
    <StyledItem>
      <Link
        href={{
          pathname: link,
          query: { title, description },
        }}
      >
        <a className="SC">
          <>
            {tags.map((tag, key) => {
              return <div className={tag} key={key}></div>;
            })}
          </>

          <div>
            <div className="title">{title}</div>
            {/* <div>{description}</div> */}
          </div>
          {/* <div>{date}</div> */}
        </a>
      </Link>
    </StyledItem>
  );
};

const StyledItem = styled.li`
  width: 100%;
  padding: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;

  .SC {
    display: block;
    font-size: 1.8rem;
    text-transform: uppercase;
    font-family: "Poppins";
    font-weight: 800;
    letter-spacing: -1px;
    text-align: right;
  }

  .title {
    line-height: 1;
    padding: 0;
    color: #ff0061;
    transition: all 0.3s linear;
    display: inline-block;

    &:hover {
      background: yellow;
      color: #20156d;
      padding: 0.3em 0;
    }

    @media (min-width: 40rem) {
      font-size: 4.5rem;
    }
  }
`;

export default Project;
