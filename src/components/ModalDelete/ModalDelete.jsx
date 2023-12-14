import { BotaoFormulario, DivBotao, DivGeral, DivSubTitulo, DivTitulo } from "./styles";
import { useQueryClient } from "@tanstack/react-query";
import { buildDeleteFerramentaErrorMessage } from "./utilis";
import { useDeleteFerramenta } from "../../hooks/query/ferramentas";

export default function ModalDelete({ _id }) {
  const queryClient = useQueryClient();

  const { mutate: deleteFerramenta } = useDeleteFerramenta({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["ferramentas"],
      });
    },
    onError: (err) => {
      const errorMessage = buildDeleteFerramentaErrorMessage(err);
      console.log(errorMessage);
    },
  });

  return (
    <>
      <DivGeral>
        <DivTitulo>Excluir Ferramenta</DivTitulo>
        <DivSubTitulo>Tem certeza que você deseja excluir essa ferramenta?</DivSubTitulo>
        <DivBotao>
          <BotaoFormulario type='button' onClick={() => deleteFerramenta(_id)}>
            EXCLUIR
          </BotaoFormulario>
        </DivBotao>
      </DivGeral>
    </>
  );
}
