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
import { GPT } from "../../assets/index";
import { AI } from "../../assets/index";
import { Gato } from "../../assets/index";
import { Tools } from "../../components/index";
import { Modal } from "../../components/index";

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
      <Tools />
    </Container>
  );
}
