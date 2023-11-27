import styled from "styled-components";
import { Lapis, Lixeira } from "../../assets";
import { colors } from "../../styles/styleVariables";

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
  background-color: ${colors.blue.background};
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
  background-color: ${colors.blue.background};
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

export const Imagem_ferramenta1 = styled.img`
  display: flex;
  max-width: 100%;
  align-items: middle;
  justify-content: center;
  margin-bottom: 70px;
`;

export const Alinhamento = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
`;
