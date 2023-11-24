import styled from "styled-components";
import { Lixeira } from "../../assets/index";
import { Lapis } from "../../assets/index";

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

export const Input_nome = styled.input`
  background-color: black;
  border: 2px solid white;
  border-radius: 5px;
  padding: 10px;
  color: white;
`;

export const Input_upload = styled.input`
  background-color: black;
  border: 2px solid white;
  border-radius: 5px;
  padding: 10px;
  color: white;
`;

export const Input_descricao = styled.input`
  background-color: black;
  border: 2px solid white;
  border-radius: 5px;
  padding: 10px;
  color: white;
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

export const Ferramentas = styled.div``;

export const Titulo_ferramentas = styled.h1`
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  font-size: 50px;
`;

export const CabecalhoFerramenta1 = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Teste1 = styled.header`
  font-size: 32px;
`;

export const Botao1 = styled.button`
  width: 50px;
  height: 50px;
  background-image: url(${Lapis});
  background-color: black;
  background-repeat: no-repeat;
  margin-left: 240px;
  border: 0px;
  &:hover {
    cursor: pointer;
  }
  //Foi colocado o cursor pointer nessa altura apenas para continuar a ideia de ser a butão
`;

export const Botao2 = styled.button`
  width: 50px;
  height: 50px;
  background-image: url(${Lixeira});
  background-repeat: no-repeat;
  background-color: black;
  border: 0px;
  &:hover {
    cursor: pointer;
  }
  //Foi colocado o cursor pointer nessa altura apenas para continuar a ideia de ser a butão
`;

export const Explicacao = styled.p`
  display: flex;
  max-width: 100%;
  justify-content: center;
  font-size: 32px;
`;

export const Botoes = styled.div`
  display: flex;
  max-width: 100%;
  gap: 10px;
`;
