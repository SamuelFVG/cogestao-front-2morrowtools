import {
  Container,
  ContainerForm,
  InputCreate,
  SaveButton,
  Line,
  Label,
  SeguraInput,
} from "./Styles";
import { CardFerramenta, ModalGrande } from "../../components";
import { useState } from "react";
import api from "../../services/api";

export default function Favorites() {
  const [nome, setNome] = useState("");
  const [description, setDescription] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [ToolData, setToolData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(nome, description, ImageUrl);
    try {
      const res = await api.post("/tool", { nome, description, ImageUrl });
      console.log(res.data);
    } catch (erro) {
      alert(erro.message);
    }
  };
  // const tools = [
  //   {
  //     name: "ChatGPT",
  //     description: "LLM da OpenAI",
  //     imageUrl: "https://picsum.photos/id/237/536/354",
  //   },
  //   {
  //     name: "Perplexity Ai",
  //     description: "Ferramenta de pesquisa com integração de um LLM",
  //     imageUrl: "https://picsum.photos/id/237/536/354",
  //   },
  // ];

  return (
    <Container>
      CRIAR NOVA FERRAMENTA
      <ContainerForm onSubmit={handleSubmit}>
        <SeguraInput>
          <Label htmlFor='nome'>nome</Label>
          <InputCreate
            placeholder='Gpt'
            id='nome'
            required
            onChange={(e) => setNome(e.target.value)}
          ></InputCreate>
        </SeguraInput>
        <SeguraInput>
          <Label htmlFor='ImageUrl'>Upload de Imagem</Label>
          <InputCreate
            placeholder='http//google'
            id='ImageUrl'
            required
            onChange={(e) => setImageUrl(e.target.value)}
          ></InputCreate>
        </SeguraInput>
        <SeguraInput>
          <Label htmlFor='description'>Descriçao curta</Label>
          <InputCreate
            placeholder='pequena descrição'
            id='description'
            required
            onChange={(e) => setDescription(e.target.value)}
          ></InputCreate>
        </SeguraInput>
        <SaveButton type='submit'>Salvar</SaveButton>
      </ContainerForm>
      <Line>FERRAMENTAS CRIADAS</Line>
      {ToolData.map((ToolData, index) => (
        <CardFerramenta key={index} ToolData={ToolData} />
      ))}
    </Container>
  );
}

//       {tools.map((tool, index) => (
//  <CardFerramenta key={index} tool={tool} />
// ))}
