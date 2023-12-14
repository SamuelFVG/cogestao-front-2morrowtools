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
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

  const queryClient = useQueryClient();

  const { mutate: createFerramenta } = useCreateFerramenta({
    onSucess: () => {
      queryClient.invalidateQueries({
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
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data) => {
    createFerramenta(data);
  };

  const { data: ferramentas2 } = useGetFerramentas({
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <Container>
      <DivNovaFerramenta>CRIAR NOVA FERRAMENTA</DivNovaFerramenta>
      <DivFormulario>
        <Formulario onSubmit={handleSubmit(onSubmit)}>
          <LabelFormulario>Nome</LabelFormulario>
          <InputFormulario
            type='text'
            required
            placeholder='GPT'
            id='nome'
            error={errors?.nome?.message}
            {...register("nome")}
            control={control}
          ></InputFormulario>

          <LabelFormulario>Upload de imagem</LabelFormulario>
          <InputFormulario
            type='url'
            required
            placeholder='http//google'
            id='imagem'
            error={errors?.link?.message}
            {...register("link")}
            control={control}
          ></InputFormulario>

          <LabelFormulario>Descrição curta</LabelFormulario>
          <InputFormulario
            type='text'
            required
            placeholder='Escreva aqui a sua descrição'
            id='descricao'
            error={errors?.descricao?.message}
            {...register("descricao")}
            control={control}
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
