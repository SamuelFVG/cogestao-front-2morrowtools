import { useState } from "react";
import {
  Container,
  Button,
  Text,
  TextTitle,
  Tool,
  DivDesc,
  DivUrlImage,
  DivName,
  EditIcon,
  Space,
  DeleteIcon,
  Form,
} from "./Styles";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";
import RegisterInput from "../../components/RegisterInput/RegisterInput";
import { useGetTools, useCreateTool } from "../../hooks/tools";
import { useForm } from "react-hook-form";

export default function Favorites() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    createTool(data);
    window.location.reload();
  };
  const [modalDelete, setModalDelete] = useState(false);
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);

  const [modalUpdate, setModalUpdate] = useState(false);
  const openModalUpdate = () => setModalUpdate(true);
  const closeModalUpdate = () => setModalUpdate(false);

  const { data: tool } = useGetTools({
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: createTool } = useCreateTool({
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <Container>
      <TextTitle>Criar nova ferramenta</TextTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Text>Nome</Text>
        <RegisterInput
          type='text'
          register={register}
          required
          id='name'
          name='name'
          placeholder='Nome'
        />
        <Text>URL da Imagem</Text>
        <RegisterInput
          type='text'
          register={register}
          required
          id='urlImage'
          name='urlImage'
          placeholder='Url da Imagem'
        />
        <Text>Descrição da imagem</Text>
        <RegisterInput
          type='text'
          register={register}
          required
          id='description'
          name='description'
          placeholder='Descrição'
        />
        <Button type='submit'>Salvar</Button>
      </Form>
      <TextTitle>Ferramentas criadas</TextTitle>
      <Space></Space>
      <Tool>
        {tool?.map((tool) => (
          <div key={tool._id}>
            <DivName>
              {tool.name} <EditIcon onClick={openModalUpdate} />{" "}
              <DeleteIcon
                onClick={() => {
                  openModalDelete();
                  itemIdToDelete(tool._id);
                }}
              />
            </DivName>
            <DivDesc>{tool.description}</DivDesc>
            <DivUrlImage style={{ backgroundImage: `url(${tool.urlImage})` }} />
          </div>
        ))}
      </Tool>
      <ModalDelete isOpen={openModalDelete} onClose={closeModalDelete} />
      <ModalUpdate isOpen={openModalUpdate} onClose={closeModalUpdate} />
    </Container>
  );
}
