import { Container, Titulo, Frame, Text, Input, DivSaveButton, SaveButton } from "./Styles";

export default function Login() {
  return (
    <Container>
      <Titulo>Fazer Login/Cadastro</Titulo>
      <Frame>
        <Text>Nome</Text>
        <Input>Pedro</Input>

        <Text>Email</Text>
        <Input>pedro@gmail.com</Input>

        <Text>Senha</Text>
        <Input>******</Input>

        <Text>Confirmação de senha</Text>
        <Input>******</Input>
      </Frame>
      <DivSaveButton>
        <SaveButton>Salvar</SaveButton>
      </DivSaveButton>
    </Container>
  );
}
