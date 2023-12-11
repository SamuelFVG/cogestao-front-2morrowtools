import { useDeleteTool } from "../../hooks/tools";
import PropTypes from "prop-types";
import { Modalbackground, ModalInterior, ButtonDelete, ModalTitle, ButtonClose } from "./Style";

export default function ModalDelete({ isOpen, onClose, itemIdToDelete }) {
  if (isOpen) {
    const { mutate: deleteTool } = useDeleteTool({
      onError: (err) => {
        console.log(err);
      },
    });

    return (
      <Modalbackground>
        <ButtonClose onClick={onClose}>X</ButtonClose>

        <ModalTitle>Excluir ferramenta</ModalTitle>
        <ModalInterior>Tem certeza que você deseja excluir essa ferramenta?</ModalInterior>
        <ButtonDelete
          onClick={() => {
            onClose();
            deleteTool(itemIdToDelete);
          }}
        >
          {" "}
          EXCLUIR
        </ButtonDelete>
      </Modalbackground>
    );
  }
  return null;
}
ModalDelete.PropTypes = {
  itemIdToDelete: PropTypes.string,
};
