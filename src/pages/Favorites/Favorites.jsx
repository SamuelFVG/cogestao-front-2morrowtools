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
  Cards,
  Ferramentas,
  HeaderCard,
  Titulo,
  Buttons,
  DescricaoCard,
  ImagemCard,
} from "./Styles";

export default function Favorites() {
  const seções = [
    {
      nome: "ChatGPT",
      descrição: "LLM da OpenAI",
      Url: "https://picsum.photos/id/237/536/354",
    },
    {
      nome: "Perplexity Ai",
      descrição: "Ferramenta de pesquisa com integração de um LLM",
      Url: "https://picsum.photos/id/237/536/354",
    },
  ];

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
          <EscrevaDescricao>Escreva aqui sua descrição</EscrevaDescricao>
        </CorpoDescricao>
      </InfoFerramentas>

      <DivBotaoSalvar>
        <BotaoSalvar>Salvar</BotaoSalvar>
      </DivBotaoSalvar>
      <Ferramentas>FERRAMENTAS CRIADAS</Ferramentas>
      {seções.map(function (seção) {
        return (
          <Cards>
            <HeaderCard>
              <Titulo>{seção.nome}</Titulo>
              <Buttons>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='94'
                  height='41'
                  viewBox='0 0 94 41'
                  fill='none'
                >
                  <path
                    d='M74 0C71.25 0 69 2.25 69 5H64C61.25 5 59 7.25 59 10H94C94 7.25 91.75 5 89 5H84C84 2.25 81.75 0 79 0H74ZM64 15V39.05C64 39.6 64.4 40 64.95 40H88.1C88.65 40 89.05 39.6 89.05 39.05V15H84.05V32.5C84.05 33.9 82.95 35 81.55 35C80.15 35 79.05 33.9 79.05 32.5V15H74.05V32.5C74.05 33.9 72.95 35 71.55 35C70.15 35 69.05 33.9 69.05 32.5V15H64.05H64Z'
                    fill='white'
                  />
                  <path
                    d='M37.8818 6.76255C38.1259 7.00737 38.2629 7.33896 38.2629 7.68464C38.2629 8.03033 38.1259 8.36192 37.8818 8.60674L35.1573 11.3338L29.933 6.10951L32.6575 3.3824C32.9024 3.13755 33.2346 3 33.5809 3C33.9272 3 34.2594 3.13755 34.5043 3.3824L37.8818 6.75994V6.76255ZM33.3105 13.178L28.0862 7.9537L10.2895 25.753C10.1457 25.8967 10.0375 26.0721 9.97344 26.265L7.87065 32.5708C7.83251 32.6857 7.8271 32.809 7.85501 32.9269C7.88292 33.0447 7.94306 33.1525 8.02871 33.2381C8.11435 33.3238 8.22212 33.3839 8.33998 33.4118C8.45784 33.4398 8.58114 33.4343 8.69609 33.3962L15.0019 31.2934C15.1945 31.2301 15.3698 31.1228 15.5138 30.9799L33.3105 13.178Z'
                    fill='white'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M0 36.9592C0 37.9984 0.412815 38.995 1.14763 39.7298C1.88244 40.4647 2.87907 40.8775 3.91825 40.8775H32.6521C33.6913 40.8775 34.6879 40.4647 35.4227 39.7298C36.1575 38.995 36.5703 37.9984 36.5703 36.9592V21.2862C36.5703 20.9398 36.4327 20.6076 36.1878 20.3627C35.9429 20.1177 35.6106 19.9801 35.2643 19.9801C34.9179 19.9801 34.5857 20.1177 34.3407 20.3627C34.0958 20.6076 33.9582 20.9398 33.9582 21.2862V36.9592C33.9582 37.3056 33.8206 37.6378 33.5756 37.8828C33.3307 38.1277 32.9985 38.2653 32.6521 38.2653H3.91825C3.57186 38.2653 3.23965 38.1277 2.99471 37.8828C2.74977 37.6378 2.61217 37.3056 2.61217 36.9592V8.22538C2.61217 7.87898 2.74977 7.54678 2.99471 7.30184C3.23965 7.0569 3.57186 6.9193 3.91825 6.9193H20.8973C21.2437 6.9193 21.5759 6.78169 21.8209 6.53675C22.0658 6.29181 22.2034 5.95961 22.2034 5.61321C22.2034 5.26682 22.0658 4.93461 21.8209 4.68967C21.5759 4.44473 21.2437 4.30713 20.8973 4.30713H3.91825C2.87907 4.30713 1.88244 4.71994 1.14763 5.45476C0.412815 6.18957 0 7.18619 0 8.22538V36.9592Z'
                    fill='white'
                  />
                </svg>
              </Buttons>
            </HeaderCard>
            <DescricaoCard>{seção.descrição}</DescricaoCard>
            <ImagemCard>
              <img href={seção.Url} />
              <img src={seção.Url} />
            </ImagemCard>
          </Cards>
        );
      })}
    </Container>
  );
}
