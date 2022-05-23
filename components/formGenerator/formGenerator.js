import ReactTooltip from "react-tooltip";
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
        <ReactTooltip />
        <Title>QUADRO LM</Title>
        <Note>
          Viene automaticamente generata una riga per ogni riga del quadro.
          <br></br>
          Per ogni riga viene fatto un check sul numero di campi presente, se
          tale numero è maggiore di 5 viene creata una nuova colonna per non
          rendere troppo piccoli i campi.<br></br>
          In questo modo si riesce ad ottenere un{" "}
          <em>effetto pdf redditi PF</em> senza dover definire a mano il numero
          di colonne di ogni riga, cosa non manutenibile
        </Note>
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
  const [value, setValue] = useState();
  const { obj, i, colGrid } = props;

  const randomNumberGenerator = () => {
    let randomNumber = (Math.random() * (10000.0 - 1.0 + 1.0) + 1.0).toFixed(2);
    return randomNumber;
  };

  const newArr = obj.columns.map((element) => ({
    ...element,
    random: randomNumberGenerator(),
  }));

  const handlePlaceholder = (e) => {
    let memo = e.target.getAttribute("memo");
    e.target.value == ""
      ? (e.target.placeholder = memo)
      : (e.target.placeholder = e.target.value);
  };
  useEffect(() => {
    ReactTooltip.rebuild();
  }, []);

  return (
    <Riga key={i}>
      <p> {obj.section}</p>
      <div className="row">
        {newArr.map((col, i) => (
          <div key={i} className={`col col-lg-${colGrid}`}>
            <span data-tip={col.random} data-type="light">
              {col.desc}
            </span>

            <input
              name={col.desc}
              className="innerField"
              memo={col.random}
              onChange={(e) => handlePlaceholder(e)}
              placeholder={col.random}
              value={value}
            ></input>
            <span className="campo">{col.col}</span>
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
  }

  .row {
    width: 100%;

    .inputWrapper {
      position: relative;
    }

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
      width: 100%;
      color: #000;
      padding: 5px;
      text-align: right;
      border: 0;
      font-size: 1rem;
      font-weight: 600;
      line-height: 2;
      padding: 5px;
      font-family: monospace;
      color: blue;
    }
    .campo {
      position: absolute;
      top: 24px;
      left: 17px;
      font-size: 0.6rem;
      float: left;
      color: #999;
    }
  }
`;

const Note = styled.div`
  position: fixed;
  top: 10vh;
  right: 2vw;
  width: 20vw;
  padding: 1em;
  background: pink;
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
