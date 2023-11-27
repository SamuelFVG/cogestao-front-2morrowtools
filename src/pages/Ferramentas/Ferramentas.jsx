import { Container, StyledForm, StyledInput,StyledButton } from "./Styles";

export default function Ferramentas() {
  return (
  <>
    <Container>Favorites</Container>

    <StyledForm>  
      <h1>CRIAR NOVA FERRAMENTA</h1>
      <label htmlFor="email">Nome</label>
        <StyledInput  id="nome" type="text" placeholder="Digite seu nome"/>

        <label htmlFor="urlImagem">Upload de imagem</label>
        <StyledInput  id="urlImagem" type="url" placeholder="http:/google" />
        <label htmlFor="descricao">Descrição curta</label>
        <StyledInput  id="descricao" type="text" placeholder="Escreva aqui a sua descrição" />
        <StyledButton className="salvar" type="submit">SALVAR</StyledButton>
    </StyledForm>

  </>
  );
  
}
