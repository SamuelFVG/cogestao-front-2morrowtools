import styled from "styled-components";
import { Input as AntdInput, Button as AntdButton } from "antd";
import { colors } from "../../styles/styleVariables";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(AntdInput)`
  background-color: ${colors.blue.background};
  color: ${colors.white};
  margin-top: 0.5rem;
  ::placeholder {
    color: ${colors.white};
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

export const Container = styled.div`
  > label {
    color: ${(props) => (props.error ? colors.red : colors.white)};
  }
  > input {
    border-color: ${(props) => (props.error ? colors.red : colors.white)} !important;
    box-shadow: none !important;
    ::placeholder {
      color: ${(props) => (props.error ? colors.red : colors.white)};
    }
  }
  > span {
    visibility: ${(props) => (props.error ? "visible" : "hidden")};
    color: ${colors.red};
  }
`;
