import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import * as S from "../commons";

const Project = ({
  title,
  description,
  link,
  tags,
  date,
  picture,
  initialText,
  setText,
  setImagePreview,
}) => {
  const setPreview = (picture, description) => {
    picture ? setImagePreview(picture) : setImagePreview("");
    description ? setText(description) : setText(initialText);
  };

  const unsetPreview = () => {
    setImagePreview("");
    setText(initialText);
  };

  return (
    <StyledItem>
      <Link
        href={{
          pathname: link,
          query: { title, description },
        }}
      >
        <a
          className="SC"
          // onMouseOver={() => setText(description)}
          // onMouseLeave={() => setText(initialText)}
          onMouseOver={() => setPreview(picture, description)}
          onMouseLeave={() => unsetPreview()}
        >
          <div>
            <div className="title">{title}</div>
            {/* <div>{description}</div> */}
            {/* <div className="tags">
              {tags.map((tag, key) => {
                return (
                  <Tag className={tag} key={key}>
                    {tag}
                  </Tag>
                );
              })}
            </div> */}
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

    background: #fff;
    border: 3px solid #222;
    transition: all 0.3s linear;

    &:hover {
      background: #000;
      color: #ffffff;
      transform: translateX(-2em);
      line-height: 2;
    }
  }

  .title {
    font-family: "Titillium web", sans-serif;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 900;
    padding: 10px 20px 10px 20px;

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

const Tag = styled.div`
  display: block;
  width: 100%;
  line-height: 1.3;
  margin: 0;
  text-align: center;
  font-size: 0.7rem;
  text-transform: Uppercase;

  &.nft {
    background: #48f1ab;
  }
  &.polygon {
    background: #f7a1d7;
  }
  &.design {
    background: #af7dff;
  }
  &.styled {
    background: #ffb560;
  }
  &.ethereum {
    background: #75acfa;
  }
  &.web3 {
    background: #fdbebe;
  }
  &.mint {
    background: #aaf7a7;
  }
`;

export default Project;
