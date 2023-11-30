import { Modalbackground, ModalInterior, BotaoConfirma, Line } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

export default function ModalMenor({ isOpen, setModalOpen, children, confirm }) {
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
          <Line>Excluir Ferramenta</Line>
          {children}
          <BotaoConfirma onClick={handleConfirm}>Excluir</BotaoConfirma>
        </ModalInterior>
      </Modalbackground>
    );
  }
  return null;
}
