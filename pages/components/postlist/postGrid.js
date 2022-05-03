import styled from "styled-components";

const S_grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(${(props) => props.sm}, minmax(0, 1fr));
  padding: 1em;

  @media (min-width: 65rem) {
    grid-template-columns: repeat(${(props) => props.xl}, minmax(0, 1fr));
  }
`;

const PostGrid = (props) => {
  console.log(props);
  return (
    <S_grid xl={2} sm={1}>
      {props.children}
    </S_grid>
  );
};

export default PostGrid;
