import {
  Container,
  Titulo,
  Label,
  Input,
  Salvar,
  Quadro,
  Ferramentas,
  Titulo_ferramentas,
} from "./Styles";

export default function Favorites() {
  return (
    <Container>
      <Titulo>CRIAR NOVA FERRAMENTA</Titulo>
      <Quadro>
        <Label>
          Nome
          <Input placeholder='GPT'></Input>
        </Label>
        <Label>
          Upload de Imagem
          <Input placeholder='http//google'></Input>
        </Label>
        <Label>
          Descrição curta
          <Input placeholder='Escreva aqui a sua descrição'></Input>
        </Label>
        <Salvar>SALVAR</Salvar>
      </Quadro>
      <Ferramentas>
        <Titulo_ferramentas>FERRAMENTAS CRIADAS </Titulo_ferramentas>
      </Ferramentas>
    </Container>
  );
}
