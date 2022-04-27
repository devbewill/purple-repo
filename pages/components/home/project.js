import Link from "next/link";
import styled from "styled-components";

const Item = styled.li`
  width: 100%;
  height: 70px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    /* transform: translateX(-100px); */
    transform: scale(1.1);
  }
`;

const Content = styled.a`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;

const TagWrapper = styled.div`
  display: flex;
  width: 5%;
`;
const Tag = styled.div`
  display: block;
  width: 6px;
  height: 30px;
  margin: 2px;
  border-radius: 30px;

  &.nft {
    background: #48f1ab;
  }
  &.polygon {
    background: #f7a1d7;
  }
  &.design {
    background: #c0e5ff;
  }
  &.styled {
    background: #e6ff81;
  }
  &.ethereum {
    background: #c195f5;
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
`;
const Title = styled.div`
  font-weight: 500;
  padding-bottom: 3px;
`;

const Description = styled.div`
  color: #00000096;
`;
const Project = ({ title, description, link, tags }) => {
  return (
    <Item>
      <Link href={link}>
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
        </Content>
      </Link>
    </Item>
  );
};

export default Project;
