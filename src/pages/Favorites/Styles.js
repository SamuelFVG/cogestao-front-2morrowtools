import styled from "styled-components";
import { Input as AntdInput, Button as AntdButton } from "antd";
import { colors } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(AntdInput)`
  background-color: ${colors.blue.background};
  color: ${colors.grey.light};
  margin-top: 0.5rem;
  ::placeholder {
    color: ${colors.grey.light};
  }
`;

export const Button = styled(AntdButton)`
  background-color: ${colors.blue.accent};
  color: ${colors.white} !important;
  border-color: transparent !important;
  width: 8rem;
`;

export const Form = styled.form`
  width: 70%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
