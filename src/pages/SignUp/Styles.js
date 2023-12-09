import styled from "styled-components";
import { fonts } from "../../styles/styleVariables";

export const Titulo = styled.h1`
  font-size: 50px;
  margin-left: 7%;
`;
export const Quadro = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 22px;
`;

export const Input = styled.input`
  background-color: black;
  border: 2px solid white;
  border-radius: 5px;
  padding: 25px;
  color: white;
  font-size: 20px;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SaveButton = styled.button`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #013c9d;
  border: 0px;
  border-radius: 5px;
  color: white;
  font-family: ${fonts.Exo2};
  cursor: pointer;
  align-self: center;
`;
