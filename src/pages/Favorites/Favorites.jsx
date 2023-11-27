import {
  Container,
  DivTexto,
  Nome,
  CorpoNome,
  Gpt,
  InfoFerramentas,
  Link,
  CorpoLink,
  Url,
  Descricao,
  CorpoDescricao,
  EscrevaDescricao,
} from "./Styles";

export default function Favorites() {
  return (
    <Container>
      <InfoFerramentas>
        <DivTexto>CRIAR NOVA FERRAMENTA</DivTexto>
        <Nome>Nome</Nome>
        <CorpoNome>
          <Gpt>GPT</Gpt>
        </CorpoNome>
        <Link>Upload de Imagem</Link>
        <CorpoLink>
          <Url>http//google</Url>
        </CorpoLink>
        <Descricao>Descrição curta</Descricao>
        <CorpoDescricao>
          <EscrevaDescricao>Escreva aqui a sua descrição</EscrevaDescricao>
        </CorpoDescricao>
      </InfoFerramentas>
    </Container>
  );
}
