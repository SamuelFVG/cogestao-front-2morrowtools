import { Container, Label, Input, SaveButton, Titulo, Quadro } from "../SignUp/Styles";

export default function SignUp() {
  return (
    <Container>
      <Titulo>Fazer Login/Cadastro</Titulo>
      <Quadro>
        <Label>Nome</Label>
        <Input placeholder='Pedro'></Input>

        <Label>Email</Label>
        <Input placeholder='pedro@gmail.com'></Input>

        <Label>Senha</Label>
        <Input placeholder='*****'></Input>

        <Label>Confirmar Senha</Label>
        <Input placeholder='*****'></Input>

        <SaveButton>Salvar</SaveButton>
      </Quadro>
    </Container>
  );
}
