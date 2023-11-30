import { Container, ContainerCreate, InputCreate, SaveButton, Line } from "./Styles";
import { CardFerramenta, ModalGrande } from "../../components";

export default function Favorites() {
  const tools = [
    {
      name: "ChatGPT",
      description: "LLM da OpenAI",
      imageUrl: "https://picsum.photos/id/237/536/354",
    },
    {
      name: "Perplexity Ai",
      description: "Ferramenta de pesquisa com integração de um LLM",
      imageUrl: "https://picsum.photos/id/237/536/354",
    },
  ];

  return (
    <Container>
      CRIAR NOVA FERRAMENTA
      <ContainerCreate>
        <p>Nome</p>
        <InputCreate placeholder='Gpt'></InputCreate>
        <p>Upload de Imagem</p>
        <InputCreate placeholder='http//google'></InputCreate>
        <p>Descrição Curta</p>
        <InputCreate placeholder='escreva aqui sua descrição'></InputCreate>
        <SaveButton>Salvar</SaveButton>
      </ContainerCreate>
      <Line>FERRAMENTAS CRIADAS</Line>
      {tools.map((tool, index) => (
        <CardFerramenta key={index} tool={tool} />
      ))}
    </Container>
  );
}
