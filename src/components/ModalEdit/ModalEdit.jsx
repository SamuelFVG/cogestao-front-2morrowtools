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
import { useUpdateFerramenta } from "../../hooks/query/ferramentas";
import { useQueryClient } from "@tanstack/react-query";
import { buildUpdateFerramentaErrorMessage, updateFerramentaValidationSchema } from "./utilis";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ModalEdit({ IAModel }) {
  const queryClient = useQueryClient();
  const [isPending, setIsPending] = useState(false);

  const { mutate: updateFerramenta } = useUpdateFerramenta({
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["ferramentas"],
        }),
      ]);
    },

    onError: (err) => {
      const errorMessage = buildUpdateFerramentaErrorMessage(err);
      console.log(errorMessage);
    },
  });

  let validationSchema;

  validationSchema = updateFerramentaValidationSchema;

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data) => {
    updateFerramenta({ _id: IAModel?._id, newFerramentaData: data });
  };

  return (
    <>
      <DivGeral>
        <DivTitulo>Editar Informações</DivTitulo>
        <DivFormulario>
          <Formulario onSubmit={handleSubmit(onSubmit)}>
            <LabelFormularioNome>Nome</LabelFormularioNome>
            <InputFormulario
              type='text'
              required
              placeholder='GPT'
              id='nome'
              error={errors?.nome?.message}
              {...register("nome")}
              control={control}
              defaultValue={IAModel?.nome}
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
              defaultValue={IAModel?.link}
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
              defaultValue={IAModel?.descricao}
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
