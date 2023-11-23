import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

export const Titulo = styled.h1`
  margin-left: 15px;
`;

export const Quadro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Nome = styled.label`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const Input_nome = styled.input`
  background-color: black;
  border: 2px solid white;
  border-radius: 5px;
`;

export const Upload = styled.label`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const Input_upload = styled.input`
  background-color: black;
  border: 2px solid white;
  border-radius: 5px;
`;

export const Descricao = styled.label`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const Input_descricao = styled.input`
  background-color: black;
  border: 2px solid white;
  border-radius: 5px;
`;

export const Salvar = styled.button`
  display: flex;
  width: 150px;
  height: 30px;
  justify-content: center;
  background-color: #013c9d;
  border: 0px;
  border-radius: 5px;
  color: white;
  font
`;
