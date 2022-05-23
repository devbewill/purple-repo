import styled from "styled-components";

const TableGrid = ({ items }) => {
  return (
    <StyledGrid>
      {items.map((item, key) => {
        const { text, title, description, tag, link, year, location } = item;

        return (
          <StyledTable key={key}>
            <StyledRowTitle>{text}</StyledRowTitle>
            <StyledRow>
              <StyledCell>Label:</StyledCell>
              <StyledCell right>
                {tag.map((tag, key) => {
                  return (
                    <Tag className={tag} key={key}>
                      {tag}
                    </Tag>
                  );
                })}
              </StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledCell>Link:</StyledCell>
              <StyledCell right>{link}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledCell>Year:</StyledCell>
              <StyledCell right>{year}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledCell>Location::</StyledCell>
              <StyledCell right>{location}</StyledCell>
            </StyledRow>
            <StyledRow>
              <StyledCell>About:</StyledCell>
              <StyledCell right>{description}</StyledCell>
            </StyledRow>
          </StyledTable>
        );
      })}
    </StyledGrid>
  );
};

const StyledGrid = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 40px 8px 60px 16px;
    flex-wrap: wrap;
}
`;

const StyledTable = styled.div`
  font-size: 15px;
  width: 100%;
  min-height: 100px;
  min-width: 280px;
  margin-right: 10px;
  padding-bottom: 25px;

  @media (min-width: 40rem) {
    width: 47%;
  }

  @media (min-width: 60rem) {
    width: 31%;
  }

  @media (min-width: 65rem) {
    width: 18%;
  }
`;

const StyledRow = styled.div`
    display: flex;
    padding-top: 4px;
    padding-bottom: 4px;
    justify-content: flex-start;
    border-bottom: 1px solid #000;

    &:last-child {
      border: 0;
    }
}
`;

const StyledRowTitle = styled(StyledRow)`
    font-size: 18px;
    line-height: 1;
    font-weight: 600;
}
`;

const StyledCell = styled.div`
    overflow: ${(props) => (props.right ? "inherit" : "hidden")};
    width: ${(props) => (props.right ? "auto" : "30%")};
    display: flex;
    align-items: flex-start;
    flex: 1;
}
`;

const Tag = styled.div`
  font-size: 13px;
  line-height: 1.25;
  letter-spacing: 0.03em;
  display: inline-block;
  margin-right: 4px;
  padding: 3px 5px;
  border-radius: 10px;
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

export default TableGrid;
