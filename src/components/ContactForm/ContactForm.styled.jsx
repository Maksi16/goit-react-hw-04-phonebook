import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  margin-right: auto;
  margin-left: auto;
  padding: 16px;
  text-align: center;
  border: 1px solid black;
  background-color: #dddbda;
`;

export const Label = styled.label`
  display: grid;
  justify-items: center;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 200px;
  height: 24px;
  margin-top: 8px;
  border: 1px solid grey;
  border-radius: 4px;
  :hover {
    border-color: green;
  }
`;

export const Button = styled.button`
  padding: 4px;
  border: 1px solid grey;
  background-color: transparent;
  border-radius: 4px;
  box-shadow: 5px 3px 3px black;
  cursor: pointer;
  :hover {
    scale: 1.1;
    background-color: grey;
    color: white;
  }
`;
