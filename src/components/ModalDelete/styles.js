import styled from "styled-components";

export const DivGeral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 358px;
  width: 550px;
`;

export const DivTitulo = styled.div`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const DivSubTitulo = styled.div`
  padding-top: 20px;
  color: #b4b4b4;
  width: 419px;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DivBotao = styled.div`
  display: flex;
  padding-top: 40px;
  align-items: center;
  justify-content: center;
`;

export const BotaoFormulario = styled.button`
  background-color: #013c9d;
  border-radius: 6px;
  border: transparent;
  width: 208px;
  height: 56px;
  flex-shrink: 0;
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;

  &:hover {
    cursor: pointer;
  }
`;
