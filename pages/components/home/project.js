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
          <div>
            <div className="title">{title}</div>
            {/* <div>{description}</div> */}
            <div className="tags">
              {tags.map((tag, key) => {
                return (
                  <span className={tag} key={key}>
                    {tag}
                  </span>
                );
              })}
            </div>
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
  text-align: right;
  border-top: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.5s ease;

  .SC {
    display: inline-block;
    line-height: 1;
    padding: 10px 20px;
    background: #fff;
    border: 3px solid #222;
    transition: all 0.3s linear;

    &:hover {
      background: #9e59fd;
      color: #ffffff;
      transform: translateX(-2em);
    }
  }

  .title {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 900;

    @media (min-width: 40rem) {
      font-size: 3.5rem;
      letter-spacing: -1px;
    }
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    span {
      padding: 3px;
    }
  }
`;

export default Project;
