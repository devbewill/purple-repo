import styled from "styled-components";

const S_post = styled.a`
  display: block;
`;

const S_imgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  object-fit: cover;
  height: 16.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 7px 18px #dbdbdb;
  margin-bottom: 1em;
`;

const S_img = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

const S_postTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.5rem;
  color: #333;
  font-weight: 800;
`;

const S_postText = styled.p`
  margin: 0.5em 0;
  color: rgb(0 0 0 / 70%);
  font-size: 1.4rem;
  font-family: "Lora";
`;

const Post = ({ picture, text, description }) => {
  return (
    <S_post>
      <S_imgWrapper>
        <S_img src={picture} alt={text} />
      </S_imgWrapper>
      <S_postTitle>{text}</S_postTitle>
      <S_postText>{description}</S_postText>
    </S_post>
  );
};

export default Post;
