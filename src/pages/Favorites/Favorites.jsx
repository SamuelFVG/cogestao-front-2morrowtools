import { useState } from "react";
import {
  Container,
  DivNovaFerramenta,
  DivFormulario,
  Formulario,
  LabelFormulario,
  InputFormulario,
  BotaoFormulario,
  DivBotao,
  DivFerramentasCriadas,
  ModalStyle,
  DivDoCard,
} from "./Styles";
import { Card } from "../../components";
import { ModalDelete } from "../../components";
import { CloseOutlined } from "@ant-design/icons";
import api from "../../services/api";

export default function Favorites() {
  const modalCloseButton = <CloseOutlined style={{ color: "white" }} />;
  const [modalDelete, setModalDelete] = useState(false);
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);
  const [nome, setNome] = useState("");
  const [link, setLink] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/ferramentas", {
      nome: nome,
      link: link,
      descricao: descricao,
    });
  };

  return (
    <Container>
      <DivNovaFerramenta>CRIAR NOVA FERRAMENTA</DivNovaFerramenta>
      <DivFormulario>
        <Formulario onSubmit={handleSubmit}>
          <LabelFormulario>Nome</LabelFormulario>
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

      <DivFerramentasCriadas>FERRAMENTAS CRIADAS</DivFerramentasCriadas>
      <DivDoCard>
        <Card />
      </DivDoCard>

      <button onClick={openModalDelete}>rian</button>
      <ModalStyle
        open={modalDelete}
        onCancel={closeModalDelete}
        width={300}
        height={300}
        padding={0}
        footer={null}
        closeIcon={modalCloseButton}
        centered
        destroyOnClose
      >
        <ModalDelete close={closeModalDelete} />
      </ModalStyle>
    </Container>
  );
}
