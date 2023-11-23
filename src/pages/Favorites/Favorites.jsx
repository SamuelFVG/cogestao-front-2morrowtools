import {
  Container,
  Titulo,
  Nome,
  Upload,
  Descricao,
  Input_nome,
  Input_upload,
  Input_descricao,
  Salvar,
  Quadro,
} from "./Styles";

export default function Favorites() {
  return (
    <Container>
      <Quadro>
        <Titulo>CRIAR NOVA FERRAMENTA</Titulo>
        <Nome>
          Nome
          <Input_nome placeholder='GPT'></Input_nome>
        </Nome>
        <Upload>
          Upload de Imagem
          <Input_upload placeholder='http//google'></Input_upload>
        </Upload>
        <Descricao>
          Descrição curta
          <Input_descricao placeholder='Escreva aqui a sua descrição'></Input_descricao>
        </Descricao>
        <Salvar>Salvar</Salvar>
      </Quadro>
    </Container>
  );
}
