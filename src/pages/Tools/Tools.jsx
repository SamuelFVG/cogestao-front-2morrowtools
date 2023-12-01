import api from "../../services/api";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
import { Container, StyledForm, StyledInput,StyledButton, StyledTools} from "./Styles";

export default function Tools() {

  const [name,setname] = useState("");
  const [imageUrl,setUrl] = useState("");
  const [description,setdescription] = useState("");
  const [tools,setTools] = useState([]);

  const handleSubmit  = async (e) => {

    e.preventDefault();
    try { 
      api.post("/Tools", {name,imageUrl,description}); 
      getTools();
    } 
    catch (error) 
      { alert("Erro de conexão, por favor tente novamente."); }
  }

  const getTools  = async () => {
    try {
      const res = await api.get("/Tools");
      setTools(res.data);
    } catch (error) 
      { alert("Erro de conexão, por favor tente novamente."); }
  };

  useEffect(() => {getTools();}, []);

  return (
  <>
    <Container>Favorites</Container>

    <StyledForm onSubmit={handleSubmit}>  
  
      <h1>CRIAR NOVA FERRAMENTA</h1>
  
      <label htmlFor="name">Nome</label>
        <StyledInput  id="name" required type="text" placeholder="Digite seu nome" onChange={(e) => setname(e.target.value)}/>
      <label htmlFor="urlImage">Upload de imagem</label>
        <StyledInput  id="urlImage" type="url" required placeholder="http:/google" onChange={(e) => setUrl(e.target.value)}/>
      <label htmlFor="decription">Descrição curta</label>
        <StyledInput  id="description" type="text" required placeholder="Escreva aqui a sua descrição" onChange={(e) => setdescription(e.target.value)}/>

      <StyledButton className="salvar" type="submit">SALVAR</StyledButton>
    </StyledForm>

    <StyledTools>
      
      <h1>FERRAMENTAS CRIADAS</h1>

      { tools.map( (tool) => ( < Card tool = {tool} key={tool.name} /> ) ) }

    </StyledTools>

  </>
  );  
}
