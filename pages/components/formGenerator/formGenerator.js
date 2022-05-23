import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function FormGenerator({ quadriPF }) {
  const refactorObj = Object.values(
    quadriPF.reduce((b, a) => {
      if (b.hasOwnProperty(a.section)) {
        b[a.section].columns.push({ col: a.column, desc: a.description });
      } else {
        a.columns = [{ col: a.column, desc: a.description }];

        b[a.section] = a;
      }
      return b;
    }, {})
  ).sort((a, b) => (a.section > b.section ? 1 : -1));

  return (
    <>
      <StyledForm className="">
        <Title>QUADRO LM</Title>
        <div className="container">
          <RowGenerator refactorObj={refactorObj}></RowGenerator>
        </div>
      </StyledForm>
    </>
  );
}

export const RowGenerator = ({ refactorObj }) => {
  return refactorObj.map((obj, i) => {
    let colGrid = 12 / obj.columns.length;
    colGrid > 5 && (colGrid = 3);
    return <ColsGenerator key={i} {...{ obj, i, colGrid }} />;
  });
};

export const ColsGenerator = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue((Math.random() * (10000.0 - 1.0 + 1.0) + 1.0).toFixed(2));
  }, []);
  const { obj, i, colGrid } = props;
  return (
    <Riga key={i}>
      <p> {obj.section}</p>
      <div className="row">
        {obj.columns.map((col, i) => (
          <div key={i} className={`col col-lg-${colGrid}`}>
            <span className="fieldDescription">{col.desc}</span>
            <div className="innerField">
              <span className="campo">{col.col}</span>
              <p className="amount">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </Riga>
  );
};

const Title = styled.div`
  font-size: 6rem;
  writing-mode: vertical-rl;
  position: fixed;
  top: 15vh;
  color: rgb(0 0 0 / 10%);
  font-weight: 900;
  line-height: 1;
  height: 100%;
`;

const StyledForm = styled.div`
  padding: 0;
  background: #fff;

  margin: 0 auto;
`;

const Riga = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0.5em 0;

  p {
    margin: 0;
    width: 5vw;
    font-size: 1rem;
    font-weight: 300;
    &.amount {
      width: 80%;
      display: inline-block;
      font-weight: 600;
      line-height: 2;
      padding: 0 3px;
      font-family: monospace;
    }
  }

  .row {
    width: 100%;

    .fieldDescription {
      display: block;
      font-size: 11px;
      line-height: 2;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
    }
    .innerField {
      background: #f4f4f4;
      color: #000;
      padding: 5px;
      text-align: right;

      .campo {
        font-size: 0.6rem;
        float: left;
        color: #999;
      }
    }
  }
`;

// const Title = styled.div`
//   font-size: 14rem;
//   writing-mode: vertical-rl;
//   position: fixed;
//   top: 10vh;
//   color: rgb(255 255 255 / 27%);
//   font-weight: 900;
//   line-height: 1;
//   height: 100%;
// `;

// const StyledForm = styled.div`
//   font-family: "Saira Extra Condensed";
//   padding: 0;
//   background: #f9df63;
//   background-image: linear-gradient(
//     to left,
//     #fbd4fa,
//     #f9d1f6,
//     #f6cef2,
//     #f4cbee,
//     #f1c8ea,
//     #f0c6e9,
//     #f0c3e8,
//     #efc1e7,
//     #f0bee9,
//     #f0bceb,
//     #f1b9ed,
//     #f1b7ef
//   );
//   margin: 0 auto;
// `;

// const Riga = styled.div`
//   display: flex;
//   align-items: flex-end;
//   padding: 1em 0;
//   border-bottom: 1px solid rgb(0 0 0 / 20%);

//   p {
//     margin: 0;
//     width: 8vw;
//     font-size: 1.5rem;
//     font-weight: 600;
//     &.amount {
//       width: 80%;
//       display: inline-block;
//     }
//   }

//   .row {
//     width: 100%;

//     .fieldDescription {
//       display: block;
//       font-size: 16px;
//       width: 100%;
//       white-space: nowrap;
//       overflow: hidden;
//     }
//     .innerField {
//       background: #ffffff;
//       color: #000;
//       padding: 5px;
//       height: 3.3em;
//       text-align: right;
//       border-radius: 5px;
//       box-shadow: 0 6px 6px 0px #00000029;
//       border: 3px solid black;

//       .campo {
//         font-size: 1em;
//         float: left;
//         color: #999;
//       }
//     }
//   }
// `;

export default FormGenerator;
