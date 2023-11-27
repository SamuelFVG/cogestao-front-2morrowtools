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
  DivBotaoSalvar,
  BotaoSalvar,
} from "./Styles";

export default function Favorites() {
  const seções = [
    {
      nome: "ChatGPT",
      Url: "https://picsum.photos/id/237/536/354",
      descrição: "LLM da OpenAI",
    },
  ];

  return (
    <Container>
      {seções.map(function (seção) {
        return (
          <InfoFerramentas>
            <DivTexto>CRIAR NOVA FERRAMENTA</DivTexto>
            <Nome>Nome</Nome>
            <CorpoNome>
              <Gpt>{seção.nome}</Gpt>
            </CorpoNome>
            <Link>Upload de Imagem</Link>
            <CorpoLink>
              <Url>{seção.Url}</Url>
            </CorpoLink>
            <Descricao>Descrição curta</Descricao>
            <CorpoDescricao>
              <EscrevaDescricao>{seção.descrição}</EscrevaDescricao>
            </CorpoDescricao>
          </InfoFerramentas>
        );
      })}
      <DivBotaoSalvar>
        <BotaoSalvar>Salvar</BotaoSalvar>
      </DivBotaoSalvar>
    </Container>
  );
}
