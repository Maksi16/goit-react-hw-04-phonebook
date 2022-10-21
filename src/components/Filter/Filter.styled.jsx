import styled from 'styled-components';

export const Label = styled.label`
  display: grid;
  justify-items: center;
  font-weight: 500;
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
