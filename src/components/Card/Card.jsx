import { Container, Description, Title, Image, InputEdit } from "./Styles";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { ModalGrande, ModalMenor } from "..";
import React, { useState } from "react";

export default function CardFerramenta({ tool }) {
  const { name, description, imageUrl } = tool;
  const [openModalGrande, setOpenModalGrande] = useState(false);

  const handleEditButtonClick = () => {
    setOpenModalGrande(true);
  };
  const [openModalMenor, setOpenModalMenor] = useState(false);

  const handleDeleteButtonClick = () => {
    setOpenModalMenor(true);
  };
  return (
    <Container>
      <Title>
        {name}

        <FaRegEdit onClick={() => handleEditButtonClick(true)} />
        <FaRegTrashAlt onClick={() => handleDeleteButtonClick(true)} />
      </Title>
      <Description>{description}</Description>
      <Image src={imageUrl} alt={name}></Image>
      <ModalGrande isOpen={openModalGrande} setModalOpen={() => setOpenModalGrande(false)}>
        <p>nome:</p>
        <InputEdit placeholder='GPT'></InputEdit>
        <p>upload de imagem:</p>
        <InputEdit placeholder='http//google'></InputEdit>
        <p>descrição curta:</p>
        <InputEdit placeholder='escreva sua descrição'></InputEdit>
      </ModalGrande>
      <ModalMenor isOpen={openModalMenor} setModalOpen={() => setOpenModalMenor(false)}>
        <p>Tem certeza que você deseja excluir essa ferramenta?</p>
      </ModalMenor>
    </Container>
  );
}
