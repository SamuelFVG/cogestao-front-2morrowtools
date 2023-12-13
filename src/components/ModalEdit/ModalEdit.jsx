import { useState } from "react";
import {
  BotaoFormulario,
  DivBotao,
  DivGeral,
  LabelFormulario,
  DivTitulo,
  DivFormulario,
  InputFormulario,
  Formulario,
  LabelFormularioNome,
} from "./styles";
import { useGetFerramentas } from "../../hooks/query/ferramentas";

export default function ModalEdit() {
  const [nome, setNome] = useState("");
  const [link, setLink] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <>
      <DivGeral>
        <DivTitulo>Editar Informações</DivTitulo>
        <DivFormulario>
          <Formulario onSubmit={handleSubmit}>
            <LabelFormularioNome>Nome</LabelFormularioNome>
            <InputFormulario
              type='text'
              required
              placeholder='GPT'
              id='nome'
              onChange={(e) => setNome(e.target.value)}
            ></InputFormulario>

            <LabelFormulario>Upload de imagem</LabelFormulario>
            <InputFormulario
              type='url'
              required
              placeholder='http//google'
              id='imagem'
              onChange={(e) => setLink(e.target.value)}
            ></InputFormulario>

            <LabelFormulario>Descrição curta</LabelFormulario>
            <InputFormulario
              type='text'
              required
              placeholder='Escreva aqui a sua descrição'
              id='descricao'
              onChange={(e) => setDescricao(e.target.value)}
            ></InputFormulario>
            <DivBotao>
              <BotaoFormulario>SALVAR</BotaoFormulario>
            </DivBotao>
          </Formulario>
        </DivFormulario>
      </DivGeral>
    </>
  );
}
