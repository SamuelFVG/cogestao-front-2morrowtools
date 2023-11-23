import { useState } from "react";
import {
  Container,
  Input,
  Botao,
  Texto,
  TextoTitulo,
  Ferramenta,
  DivDesc,
  DivUrlImage,
  DivNome,
  EditIcon,
  DeleteIcon,
} from "./Styles";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";

export default function Favorites() {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleDeleteClick = () => {
    setOpenModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
  };

  const handleUpdateClick = () => {
    setOpenModalUpdate(true);
  };

  const handleCloseModalUpdate = () => {
    setOpenModalUpdate(false);
  };

  return (
    <Container>
      <TextoTitulo>Criar nova ferramenta</TextoTitulo>
      <Texto>Nome</Texto>
      <Input type='text' required id='nome' name='nome' placeholder='Nome' />
      <Texto>URL da Imagem</Texto>
      <Input type='text' required id='url' name='url' placeholder='Url da Imagem' />
      <Texto>Descrição da imagem</Texto>
      <Input type='text' required id='descricao' name='descricao' placeholder='Descriçãoo' />
      <Botao>Salvar</Botao>
      <TextoTitulo>Ferramentas criadas</TextoTitulo>
      <Ferramenta>
        <DivNome>
          Ferramenta 1 <EditIcon onClick={handleUpdateClick} />{" "}
          <DeleteIcon onClick={handleDeleteClick} />
        </DivNome>
        <DivDesc>Descrição ferramenta 1</DivDesc>
        <DivUrlImage style={{ backgroundImage: `url(https://i.ibb.co/HpXGxwG/1.jpg)` }} />
      </Ferramenta>
      <ModalDelete isOpen={openModalDelete} onClose={handleCloseModalDelete} />
      <ModalUpdate isOpen={openModalUpdate} onClose={handleCloseModalUpdate} />
    </Container>
  );
}
