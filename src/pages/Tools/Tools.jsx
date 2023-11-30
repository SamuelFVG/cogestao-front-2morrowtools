import { useState } from "react";
import { Container, StyledForm, StyledInput,StyledButton, StyledTools} from "./Styles";
import Card from "../../components/Card/Card";
import api from "../../services/api";

export default function Tools() {
  const [name,setname] = useState("");
  const [imageUrl,setUrl] = useState("");
  const [description,setdescription] = useState("");

  const handleSubmit  = async (e) => {
    e.preventDefault();
    try{
        const res = await api.post("/Tools", {name,imageUrl,description});
        console.log(res);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
  return (
  <>
    <Container>Favorites</Container>

    <StyledForm onSubmit={handleSubmit}>  
      <h1>CRIAR NOVA FERRAMENTA</h1>
      <label htmlFor="name">Nome</label>
        <StyledInput  id="name" required type="text" placeholder="Digite seu name" onChange={(e) => setname(e.target.value)}/>

        <label htmlFor="urlImage">Upload de imagem</label>
        <StyledInput  id="urlImage" type="url" required placeholder="http:/google" onChange={(e) => setUrl(e.target.value)}/>
        <label htmlFor="decription">Descrição curta</label>
        <StyledInput  id="description" type="text" required placeholder="Escreva aqui a sua descrição" onChange={(e) => setdescription(e.target.value)}/>
        <StyledButton className="salvar" type="submit">SALVAR</StyledButton>
    </StyledForm>

    <StyledTools>

    <Card/>

    </StyledTools>

  </>
  );
  
}
