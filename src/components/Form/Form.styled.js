import styled from "@emotion/styled";

export const FormStyled = styled.form`
  display: block;
`;
export const Label = styled.label`
  display: block;
  text-align: center;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 450px;
  margin-top: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  padding: 9px 15px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #0066cc;
  background: #3399ff;
  color: white;
  &:hover,
  :focus {
    background: #003366;
    box-shadow: 1px -1px 5px 1px rgba(243, 4, 36, 0.18);
  }
`;
