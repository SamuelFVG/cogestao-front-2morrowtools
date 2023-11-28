import { Container, ContainerCreate, InputCreate, SaveButton, Line } from "./Styles";
import { ModalGrande } from "../../components";
import React, { useState } from "react";
export default function Favorites() {
  const [openModal, setOpenModal] = useState(false);

  const handleSaveButtonClick = () => {
    setOpenModal(true);
  };
  return (
    <Container>
      CRIAR NOVA FERRAMENTA
      <ContainerCreate>
        <p>Nome</p>
        <InputCreate placeholder='Gpt'></InputCreate>
        <p>Upload de Imagem</p>
        <InputCreate placeholder='http//google'></InputCreate>
        <p>Descrição Curta</p>
        <InputCreate placeholder='escreva aqui sua descrição'></InputCreate>
        <SaveButton onClick={() => handleSaveButtonClick(true)}>Salvar</SaveButton>
      </ContainerCreate>
      <ModalGrande isOpen={openModal} setModalOpen={() => setOpenModal(false)}></ModalGrande>
      <Line>FERRAMENTAS CRIADAS</Line>
    </Container>
  );
}
