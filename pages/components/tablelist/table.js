import styled from "styled-components";

const S_Table = styled.div`
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

  .row {
    display: flex;
    padding-top: 4px;
    padding-bottom: 4px;
    justify-content: flex-start;
    border-bottom: 1px solid #000;

    &:last-child {
      border: 0;
    }

    .left {
      overflow: hidden;
      width: 30%;
    }

    .right {
      display: flex;
      align-items: flex-start;
      flex: 1;
    }
  }

  .title {
    font-size: 18px;
    line-height: 1;
    font-weight: 600;
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

const Table = ({ title, text, link, location, description, tags, year }) => {
  return (
    <S_Table>
      <div className="row title">{text}</div>
      <div className="row">
        <div className="left">Label</div>
        <div className="right">
          {tags.map((tag, key) => {
            return (
              <Tag className={tag} key={key}>
                {tag}
              </Tag>
            );
          })}
        </div>
      </div>
      <div className="row">
        <div className="left">Link:</div>
        <div className="right">{link}</div>
      </div>
      <div className="row">
        <div className="left">Year:</div>
        <div className="right">{year}</div>
      </div>
      <div className="row">
        <div className="left">Location::</div>
        <div className="right">{location}</div>
      </div>
      <div className="row">
        <div className="left">About:</div>
        <div className="right">{description}</div>
      </div>
    </S_Table>
  );
};

export default Table;
