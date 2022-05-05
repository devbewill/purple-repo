import styled from "styled-components";

function PostGrid({ items }) {
  return (
    <StyledGrid xl={2} sm={1}>
      {items.map((post, key) => {
        const { text, description, picture } = post;
        return (
          <StyledPost key={key}>
            <StyledWrapper>
              <StyledPicture src={picture} alt={text} />
            </StyledWrapper>
            <StyledTitle>{text}</StyledTitle>
            <StyledText>{description}</StyledText>
          </StyledPost>
        );
      })}
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(${(props) => props.sm}, minmax(0, 1fr));
  padding: 1em;

  @media (min-width: 65rem) {
    grid-template-columns: repeat(${(props) => props.xl}, minmax(0, 1fr));
  }
`;

const StyledPost = styled.a`
  display: block;
`;

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  object-fit: cover;
  height: 16.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 7px 18px #dbdbdb;
  margin-bottom: 1em;
`;

const StyledPicture = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.5rem;
  color: #333;
  font-weight: 800;
`;

const StyledText = styled.p`
  margin: 0.5em 0;
  color: rgb(0 0 0 / 70%);
  font-size: 1.4rem;
  font-family: "Lora";
`;

export default PostGrid;
