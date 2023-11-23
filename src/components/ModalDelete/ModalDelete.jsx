import { Modalbackground, ModalInterior, BotaoDelete, ModalTitulo, BotaoFechar } from "./Style";

export default function ModalDelete({ isOpen, onClose }) {
  if (isOpen) {
    return (
      <Modalbackground>
        <BotaoFechar onClick={onClose}>X</BotaoFechar>

        <ModalTitulo>Excluir ferramenta</ModalTitulo>
        <ModalInterior>Tem certeza que você deseja excluir essa ferramenta?</ModalInterior>
        <BotaoDelete> EXCLUIR</BotaoDelete>
      </Modalbackground>
    );
  }
  return null;
}
