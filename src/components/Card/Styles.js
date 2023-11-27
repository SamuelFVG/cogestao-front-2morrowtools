import styled from "styled-components";
import { Modal } from "antd";

export const DivCard = styled.div`
  display: flex;
  padding-top: 4%;
  justify-items: center;
  align-self: center;
  width: 50%;
  flex-direction: column;
`;

export const DivNomeIcons = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
`;

export const DivNomeFerramenta = styled.div`
  width: 80%;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const DivDescricao = styled.div`
  margin-top: 2%;
  justify-content: left;
  align-items: left;
  text-align: left;
  color: #828282;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const DivImagem = styled.div`
  display: flex;
  padding-top: 3%;
  width: 100%;
  align-self: center;
  justify-content: center;
`;
export const Imagem = styled.img``;

export const DivIconLixo = styled.div`
  width: 5%;

  > svg {
    font-size: 40px;
    cursor: pointer;
  }
`;

export const DivIconPen = styled.div`
  width: 5%;

  > svg {
    font-size: 44px;
    cursor: pointer;
  }
`;
export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    border-radius: 40px;
    background-color: #1f1f1f;
    box-shadow: 12px 12px 26.3px 5px rgba(0, 0, 0, 0.25);
  }
`;
