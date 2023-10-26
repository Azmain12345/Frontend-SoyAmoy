import styled from "styled-components";

// Styled input component
const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing:border-box;
`;

// Input component
export default function Input(props) {
  return <input {...props} />
}