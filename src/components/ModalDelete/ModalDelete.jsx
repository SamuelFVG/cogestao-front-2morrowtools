import { BotaoFormulario, DivBotao, DivGeral, DivSubTitulo, DivTitulo } from "./styles";

export default function ModalDelete() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <DivGeral>
        <DivTitulo>Excluir Ferramenta</DivTitulo>
        <DivSubTitulo>Tem certeza que você deseja excluir essa ferramenta?</DivSubTitulo>
        <DivBotao>
          <BotaoFormulario onClick={handleSubmit}>EXCLUIR</BotaoFormulario>
        </DivBotao>
      </DivGeral>
    </>
  );
}
