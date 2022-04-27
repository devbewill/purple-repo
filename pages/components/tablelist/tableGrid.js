import styled from "styled-components";

const S_grid = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 40px 8px 60px 16px;
    flex-wrap: wrap;
}
`;

const TableGrid = (props) => {
  return <S_grid>{props.children}</S_grid>;
};

export default TableGrid;
