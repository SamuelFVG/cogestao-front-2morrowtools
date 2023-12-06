import {
  Container,
  SeguraInput,
  Label,
  ContainerForm,
  InputCreate,
  SaveButton,
} from "../Favorites/Styles";

export default function Login() {
  return (
    <Container>
      <ContainerForm>
        <SeguraInput>
          <Label htmlFor='nome'>Nome</Label>
          <InputCreate placeholder='Pedro' id='nome' required></InputCreate>
        </SeguraInput>
        <SeguraInput>
          <Label htmlFor='ImageUrl'>Email</Label>
          <InputCreate
            placeholder='Pedro@gmail.com'
            id='ImageUrl'
            required
            type='email'
          ></InputCreate>
        </SeguraInput>
        <SeguraInput>
          <Label htmlFor='Password'>Senha</Label>
          <InputCreate placeholder='*****' id='description' required type='password'></InputCreate>
        </SeguraInput>
        <SeguraInput>
          <Label htmlFor='Password'>Confirmação de senha</Label>
          <InputCreate placeholder='*****' id='description' required type='password'></InputCreate>
        </SeguraInput>
        <SaveButton type='submit'>Salvar</SaveButton>
      </ContainerForm>
    </Container>
  );
}
