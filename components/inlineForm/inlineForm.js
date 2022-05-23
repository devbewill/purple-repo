import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { pricing, project } from "../data";

const InlineForm = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState({});
  const [visible, setVisible] = useState(false);

  const onSubmit = (data) => showResult(data);

  const showResult = (data) => {
    setFormData(data);
    let obj = Object.values(pricing);
    let temp = [];
    obj.map((val, i) => val.job === data.job && setResult(...temp, val));
    setVisible(true);
  };

  useEffect(() => {}, []);
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        My name is
        <input {...register("name")} type="text" size="7" height="100" />
        <br></br> im a
        <select {...register("job")} height="100">
          <option value=""></option>
          <option value="designer">designer</option>
          <option value="developer">developer</option>
        </select>
        and my annual salary is
        <input {...register("ral")} type="text" size="5" className="ral" />
        <br></br>
        <input type="submit" value="calculate" />
      </Form>
      {visible ? (
        <Result>
          Good news <span>{formData.name}</span>! <br></br>
          As a freelancer you would just need to do{" "}
          <span>
            {Math.round(formData.ral / result.cost)} {result.activity}
          </span>{" "}
          (average <span>${result.cost} / each</span>) to get the same income.
        </Result>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

// const Container = styled.div`
//   display: flex;
//   width: 100vw;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
// const Form = styled.form`
//   /* border-bottom: 5px solid black; */
//   margin: 4vh;
//   max-width: 70vw;
//   display: block;
//   font-size: 5rem;

//   font-weight: 300;
//   line-height: 1.4;

//   input[type="text"],
//   select {
//     border: 0;
//     background: transparent;
//     height: 1.2em;
//     color: #f351ff;
//     font-size: 4rem;
//     font-family: inherit;
//     display: inline-block;
//     padding: 0 20px;
//     margin: 0 10px;
//     font-weight: 600;
//     text-transform: uppercase;
//     background: rgba(0, 0, 0, 0.03);
//   }

//   input[type="submit"] {
//     border: 0;
//     background: #000;
//     padding: 0.2em 1em;
//     color: #fff;
//     font-size: 2rem;
//     font-family: inherit;
//     text-transform: uppercase;
//     display: inline-block;
//     border-radius: 5em;
//   }
//   input:focus,
//   select:focus,
//   textarea:focus,
//   button:focus {
//     outline: none;
//   }
// `;

// const Result = styled.div`
//   width: 80vw;
//   font-size: 2.5rem;
//   font-family: "Poppins";
//   color: #000;
//   line-height: 1.3;
//   padding: 1em;
//   /* background: #111; */
//   border-radius: 1em;

//   span {
//     display: inline-block;
//     color: #f351ff;
//     font-weight: 700;
//     text-transform: capitalize;
//   }
// `;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  margin: 4vh;
  border-bottom: 5px solid #000;
  padding-bottom: 1em;
  max-width: 70vw;
  display: block;
  font-size: 5rem;
  font-family: "Titillium Web", sans-serif;
  text-transform: uppercase;
  line-height: 1;
  color: #8524d9;

  input[type="text"],
  select {
    border: 0;
    background: transparent;
    height: 1em;
    color: #ff168b;
    border-bottom: 2px solid #8524d9;
    font-size: 5rem;
    font-family: "Titillium Web", sans-serif;
    text-transform: uppercase;
    display: inline-block;
    padding: 0 20px;
  }
  select {
    height: 1.1em;
  }
  input[type="submit"] {
    border: 0;
    background: #000;
    padding: 5px 20px;
    color: #fff;
    font-size: 2rem;
    font-family: "Titillium Web", sans-serif;
    text-transform: uppercase;
    display: inline-block;
    border-radius: 5em;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`;

const Result = styled.div`
  margin-top: 1em;
  width: 70vw;
  font-size: 2.5rem;
  font-family: "Poppins";
  color: #ffffff;
  line-height: 1.3;
  padding: 0.6em;
  background: #ff168b;
  border-radius: 1em;
  box-shadow: 60px -16px #8524d9;
  span {
    display: inline-block;
    color: #ffe151;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export default InlineForm;
