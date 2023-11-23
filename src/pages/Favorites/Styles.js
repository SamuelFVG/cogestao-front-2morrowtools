import styled from "styled-components";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons/lib/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;
export const EditIcon = styled(EditOutlined)`
  align-self: flex-end;
  cursor: pointer;
  font-size: 24px;
`;

export const DeleteIcon = styled(DeleteOutlined)`
  align-self: flex-end;
  cursor: pointer;
  font-size: 24px;
`;
export const Texto = styled.div`
  margin-left: 100px;
  align-self: flex-start;
`;

export const TextoTitulo = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-size: 40px;
`;

export const Input = styled.input`
  border-color: #fff;
  background: #000;
  font-size: 15px;
  color: #fff;
  font-family: Roboto;
  margin: 5px 0;
  height: 40px;
  width: 80%;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 20px;
  border-radius: 6px;
`;
export const Ferramenta = styled.div`
  display: flex;
  width: 800px;
  margin-left: 250px;
  flex-direction: column;
  margin-right: 100px;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;
export const DivNome = styled.div`
  font-size: 20px;
  font-family: "Exo 2", sans-serif;
  color: #fff;
  align-self: flex-start;
  width: 100%;
`;
export const DivDesc = styled.div`
  font-size: 20px;
  font-family: "Exo 2", sans-serif;
  color: #828282;
  margin-bottom: 10px;
  align-self: flex-start;
`;
export const DivUrlImage = styled.div`
  width: 100%;
  height: 1000px;
`;
export const Botao = styled.button`
  height: 30px;
  width: 100px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;
  background: #013c9d;
  color: #fff;
  border-radius: 6px;
`;
