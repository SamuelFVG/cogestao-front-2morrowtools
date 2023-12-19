import { Modalbackground, ModalInput, ButtonUpdate, ModalTitle, ModalText, Form } from "./Style";
import { useUpdateTool } from "../../hooks/tools";
import PropTypes from "prop-types";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import RegisterInputModal from "../RegisterInputModal/RegisterInputModal";

export default function ModalUpdate({ querofechar, idAI }) {
  const queryClient = useQueryClient();
  const { handleSubmit, register } = useForm();
  const { mutate: updateTool } = useUpdateTool({
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
  const onSubmit = (data) => {
    updateTool({ _id: idAI }, { newToolData: data });
    console.log(idAI, data);
    //window.location.reload();
  };

  return (
    <Modalbackground>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalTitle>Editar informações</ModalTitle>
        <ModalText>Nome</ModalText>
        <RegisterInputModal
          type='text'
          required
          id='name'
          name='name'
          register={register}
          placeholder='Nome'
        />
        <ModalText>URL da Imagem</ModalText>
        <RegisterInputModal
          type='text'
          required
          id='url'
          register={register}
          name='url'
          placeholder='Url da Imagem'
        />
        <ModalText>Descrição da imagem</ModalText>
        <RegisterInputModal
          type='text'
          required
          register={register}
          id='description'
          name='description'
          placeholder='Descrição'
        />{" "}
        <ButtonUpdate type='submit'>Salvar</ButtonUpdate>
      </Form>
    </Modalbackground>
  );
}
ModalUpdate.PropTypes = {
  idAI: PropTypes.object.isRequired,
  querofechar: PropTypes.func.isRequired,
};
