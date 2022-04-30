import Link from "next/link";
import styled from "styled-components";

const Project = ({ title, description, link, tags, date, idx }) => {
  const saveLocalStorage = ({ title, description }) => {
    let obj = { title: title, description: description };
    if (typeof window !== "undefined") {
      localStorage.setItem("obj", JSON.stringify(obj));
    }
  };

  return (
    <Item onClick={() => saveLocalStorage({ title, description })}>
      <Link href={link} obj={{ title, description }}>
        <Content>
          <TagWrapper>
            {tags.map((tag, key) => {
              return <Tag className={tag} key={key}></Tag>;
            })}
          </TagWrapper>

          <TextWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </TextWrapper>
          <Date>{date}</Date>
        </Content>
      </Link>
    </Item>
  );
};

const Item = styled.li`
  width: 100%;
  padding: 0.5em 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  &:hover {
    transform: translateX(-50px);
  }
`;

const Content = styled.a`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
`;

const TagWrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 20px;
`;
const Tag = styled.div`
  display: block;
  width: 12px;
  height: 12px;
  margin: 5px 0;
  border-radius: 50%;

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
    background: #ffda60;
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

const TextWrapper = styled.div`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 40rem) {
    width: 85%;
  }
`;
const Title = styled.div`
  font-weight: 500;
`;

const Description = styled.div`
  color: rgba(0, 0, 0, 0.5);
`;

const Date = styled.div`
  display: none;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.3);

  @media (min-width: 40rem) {
    display: block;
  }
`;
export default Project;
