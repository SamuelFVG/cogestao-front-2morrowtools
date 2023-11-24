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
} from "./Styles";
import { Lixeira } from "../../assets/index";

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
        <CabecalhoFerramenta1>
          <Teste1> Teste da ferramenta 1</Teste1>
          <Botoes>
            <Botao1></Botao1>
            <Botao2></Botao2>
          </Botoes>
        </CabecalhoFerramenta1>
        <Explicacao>Aqui vai ficar a descrição curta da ferramenta</Explicacao>
      </Ferramentas>
    </Container>
  );
}
