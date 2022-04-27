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
  color: #333;
`;

const S_postText = styled.p`
  color: #666;
`;

const Post = ({ picture, title, text }) => {
  return (
    <S_post>
      <S_imgWrapper>
        <S_img src={picture} alt={title} />
      </S_imgWrapper>
      <S_postTitle>{title}</S_postTitle>
      <S_postText>{text}</S_postText>
    </S_post>
  );
};

export default Post;
