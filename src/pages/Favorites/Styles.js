import styled from "styled-components";
import { Lixeira } from "../../assets/index";
import { Lapis } from "../../assets/index";
import { fonts } from "../../styles/styleVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

export const Titulo = styled.h1`
  margin-left: 7%;
  font-size: 50px;
`;

export const Quadro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Salvar = styled.button`
  display: flex;
  width: 100px;
  height: 50px;
  justify-content: center;
  background-color: #013c9d;
  border: 0px;
  border-radius: 5px;
  color: white;
  align-items: center;
  font-family: ${fonts.Exo2};
  cursor: pointer;
`;

export const Input = styled.input`
  background-color: black;
  border: 2px solid white;
  border-radius: 5px;
  padding: 15px;
  color: white;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 85%;
  font-size: 20px;
  font-size: 22px;
`;
