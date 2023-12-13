import { useEffect, useState } from "react";
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
import { useGetFerramentas, useCreateFerramenta } from "../../hooks/query/ferramentas";
import { QueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "antd/es/form/Form";
import { createFerramentaValidationSchema, buildCreateFerramentaErrorMessage } from "./utilis";

export default function Favorites() {
  const modalCloseButton = <CloseOutlined style={{ color: "white" }} />;
  const [modalDelete, setModalDelete] = useState(false);
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);
  const [nome, setNome] = useState("");
  const [link, setLink] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ferramentas, setFerramentas] = useState([]);

  //ref ModalCreateCategory

  const { mutate: createFerramenta } = useCreateFerramenta({
    onSucess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["ferramentas"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  let validationSchema = createFerramentaValidationSchema;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data) => {
    createFerramenta(data);
  };

  const errorMessage = errors?.name?.message;

  const { data: ferramentas2 } = useGetFerramentas({
    onError: (err) => {
      console.log(err);
    },
  });

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
            error={!!errorMessage}
            {...register("nome")}
          ></InputFormulario>

          <LabelFormulario>Upload de imagem</LabelFormulario>
          <InputFormulario
            type='url'
            required
            placeholder='http//google'
            id='imagem'
            error={!!errorMessage}
            {...register("link")}
          ></InputFormulario>

          <LabelFormulario>Descrição curta</LabelFormulario>
          <InputFormulario
            type='text'
            required
            placeholder='Escreva aqui a sua descrição'
            id='descricao'
            error={!!errorMessage}
            {...register("descricao")}
          ></InputFormulario>
          <DivBotao>
            <BotaoFormulario>SALVAR</BotaoFormulario>
          </DivBotao>
        </Formulario>
      </DivFormulario>

      <DivFerramentasCriadas>FERRAMENTAS CRIADAS</DivFerramentasCriadas>
      {ferramentas2?.map((IAModel) => (
        <DivDoCard>
          <Card IAModel={IAModel} />
        </DivDoCard>
      ))}
    </Container>
  );
}
