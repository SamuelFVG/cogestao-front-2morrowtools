import {
  Container,
  Titulo,
  Label,
  Input,
  Salvar,
  Quadro,
  Ferramentas,
  Titulo_ferramentas,
  Teste1,
  CabecalhoFerramenta1,
  Botao1,
  Botao2,
  Explicacao,
  Botoes,
  Imagem_ferramenta1,
  Alinhamento,
} from "./Styles";
import { Tools } from "../../components/index";
import { useState } from "react";
import { usePostTool } from "../../services/ManagerService";

export default function Favorites() {
  const [name, setAiName] = useState();
  const [imageUrl, setUrlLink] = useState();
  const [description, setDescription] = useState();

  async function handleSubmit() {
    const result = usePostTool({ name, imageUrl, description });
  }

  return (
    <Container>
      <Titulo>CRIAR NOVA FERRAMENTA</Titulo>
      <Quadro>
        <Label htmlFor='nome'>
          Nome
          <Input onChange={(e) => setAiName(e.target.value)} placeholder='GPT' required></Input>
        </Label>
        <Label htmlFor='url'>
          Upload de Imagem
          <Input
            onChange={(e) => setUrlLink(e.target.value)}
            placeholder='http//google'
            required
          ></Input>
        </Label>
        <Label htmlFor='descricao'>
          Descrição curta
          <Input
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Escreva aqui a sua descrição'
            required
          ></Input>
        </Label>
        <Salvar onClick={() => handleSubmit()}>SALVAR</Salvar>
      </Quadro>
      <Tools />
    </Container>
  );
}
