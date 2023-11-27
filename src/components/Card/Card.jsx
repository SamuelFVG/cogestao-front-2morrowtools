import {
  DivImagem,
  DivCard,
  DivDescricao,
  DivNomeFerramenta,
  DivNomeIcons,
  Imagem,
  ModalStyle,
  DivIconLixo,
  DivIconPen,
} from "./Styles";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { CloseOutlined } from "@ant-design/icons";
import api from "../../services/api";
import { useState } from "react";
import { ModalDelete, ModalEdit } from "../../components";

export default function Card() {
  const modalCloseButton = <CloseOutlined style={{ color: "white" }} />;
  const [modalDelete, setModalDelete] = useState(false);
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);

  const [modalEdit, setModalEdit] = useState(false);
  const openModalEdit = () => setModalEdit(true);
  const closeModalEdit = () => setModalEdit(false);

  return (
    <DivCard>
      <DivNomeIcons>
        <DivNomeFerramenta>Nome ferramenta</DivNomeFerramenta>
        <DivIconLixo>
          <FaRegTrashAlt onClick={openModalDelete} />
          <ModalStyle
            open={modalDelete}
            onCancel={closeModalDelete}
            width={600}
            height={400}
            padding={0}
            footer={null}
            closeIcon={modalCloseButton}
            centered
            destroyOnClose
          >
            <ModalDelete close={closeModalDelete} />
          </ModalStyle>
        </DivIconLixo>

        <DivIconPen>
          <HiOutlinePencilAlt onClick={openModalEdit} />
          <ModalStyle
            open={modalEdit}
            onCancel={closeModalEdit}
            width={600}
            height={650}
            padding={0}
            footer={null}
            closeIcon={modalCloseButton}
            centered
            destroyOnClose
          >
            <ModalEdit close={closeModalEdit} />
          </ModalStyle>
        </DivIconPen>
      </DivNomeIcons>

      <DivDescricao>descricao</DivDescricao>
      <DivImagem>
        <Imagem src='https://picsum.photos/id/237/536/354'></Imagem>
      </DivImagem>
    </DivCard>
  );
}
