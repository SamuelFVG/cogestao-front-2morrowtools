import {
  Modalbackground,
  ModalInput,
  ButtonUpdate,
  ModalTitle,
  ButtonClose,
  ModalText,
} from "./Style";

export default function ModalUpdate({ isOpen, onClose }) {
  if (isOpen) {
    return (
      <Modalbackground>
        <ModalTitle>Editar informações</ModalTitle>
        <ButtonClose onClick={onClose}>X</ButtonClose>
        <ModalText>Nome</ModalText>
        <ModalInput type='text' required id='name' name='name' placeholder='Nome' />
        <ModalText>URL da Imagem</ModalText>
        <ModalInput type='text' required id='url' name='url' placeholder='Url da Imagem' />
        <ModalText>Descrição da imagem</ModalText>
        <ModalInput
          type='text'
          required
          id='description'
          name='description'
          placeholder='Descrição'
        />{" "}
        <ButtonUpdate>Salvar</ButtonUpdate>
      </Modalbackground>
    );
  }
  return null;
}
