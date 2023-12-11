import { useDeleteTool } from "../../hooks/tools";
import PropTypes from "prop-types";
import { Modalbackground, ModalInterior, ButtonDelete, ModalTitle } from "./Style";
import { useQueryClient } from "@tanstack/react-query";

export default function ModalDelete({ querofechar, idAI }) {
  const queryClient = useQueryClient();
  const { mutate: deleteTool } = useDeleteTool({
    onError: (err) => {
      console.log(err);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["IA"],
      });
      querofechar();
    },
  });

  return (
    <Modalbackground>
      <ModalTitle>Excluir ferramenta</ModalTitle>
      <ModalInterior>Tem certeza que você deseja excluir essa ferramenta?</ModalInterior>
      <ButtonDelete
        onClick={() => {
          deleteTool(idAI);
        }}
      >
        EXCLUIR
      </ButtonDelete>
    </Modalbackground>
  );
}
ModalDelete.PropTypes = {
  idAI: PropTypes.object.isRequired,
  querofechar: PropTypes.func.isRequired,
};
