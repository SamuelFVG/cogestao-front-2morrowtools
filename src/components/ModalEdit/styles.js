import styled from "styled-components";

export const DivGeral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 600px;
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

export const DivFormulario = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 2%;
`;
export const Formulario = styled.form``;
export const LabelFormularioNome = styled.label`
  color: #fff;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  display: block;
  margin-top: 0px;
`;

export const LabelFormulario = styled.label`
  color: #fff;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  display: block;
  margin-top: 30px;
`;
export const InputFormulario = styled.input`
  width: 100%;
  height: 64px;
  margin-top: 1%;
  padding-left: 1%;
  background-color: transparent;
  border-radius: 6px;
  border: 2px solid #fff;
  color: #b4b4b4;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DivBotao = styled.div`
  display: flex;
  padding-top: 50px;
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
