import {
  Modalbackground,
  ModalInput,
  BotaoUpdate,
  ModalTitulo,
  BotaoFechar,
  ModalTexto,
} from "./Style";

export default function ModalUpdate({ isOpen, onClose }) {
  if (isOpen) {
    return (
      <Modalbackground>
        <ModalTitulo>Editar informações</ModalTitulo>
        <BotaoFechar onClick={onClose}>X</BotaoFechar>
        <ModalTexto>Nome</ModalTexto>
        <ModalInput type='text' required id='nome' name='nome' placeholder='Nome' />
        <ModalTexto>URL da Imagem</ModalTexto>
        <ModalInput type='text' required id='url' name='url' placeholder='Url da Imagem' />
        <ModalTexto>Descrição da imagem</ModalTexto>
        <ModalInput
          type='text'
          required
          id='descricao'
          name='descricao'
          placeholder='Descrição'
        />{" "}
        <BotaoUpdate>Salvar</BotaoUpdate>
      </Modalbackground>
    );
  }
  return null;
}
