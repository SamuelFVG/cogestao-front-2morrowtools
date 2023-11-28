import { Modalbackground, ModalInterior, BotaoConfirma, Line } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ isOpen, setModalOpen, children, confirm }) {
  if (isOpen) {
    const handleConfirm = () => {
      confirm();
      setTimeout(() => {
        setModalOpen();
      }, 10);
    };
    return (
      <Modalbackground>
        <ModalInterior>
          <AiOutlineClose onClick={setModalOpen}> </AiOutlineClose>
          <Line>Editar Informações</Line>
          {children}
          <BotaoConfirma onClick={handleConfirm}>SALVAR</BotaoConfirma>
        </ModalInterior>
      </Modalbackground>
    );
  }
  return null;
}
