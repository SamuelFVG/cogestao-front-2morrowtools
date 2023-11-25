import { useState } from "react";
import { Container, DivNovaFerramenta, DivFormulario, Formulario, LabelFormulario, InputFormulario, BotaoFormulario, DivBotao} from "./Styles";

export default function Favorites() {
const [Nome, setNome] = useState('');
const [Imagem, setImagem] = useState('');
const [Descricao, setDescricao] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

}

  return (
    <Container>
      <DivNovaFerramenta>CRIAR NOVA FERRAMENTA</DivNovaFerramenta>
      <DivFormulario>
        <Formulario onSubmit={handleSubmit}>
          <LabelFormulario>Nome</LabelFormulario>
          <InputFormulario type="text" required placeholder="GPT" 
          id="nome" onChange={(e) => setNome(e.target.value)}></InputFormulario>

          <LabelFormulario>Upload de imagem</LabelFormulario>
          <InputFormulario type= "url" required placeholder="http//google" 
          id="imagem" onChange={(e) => setImagem(e.target.value)} ></InputFormulario>

          <LabelFormulario>Descrição curta</LabelFormulario>
          <InputFormulario type="text" required placeholder="Escreva aqui a sua descrição"
          id= "descricao" onChange={(e) => setDescricao(e.target.value)} ></InputFormulario>
        <DivBotao>
        <BotaoFormulario>SALVAR</BotaoFormulario>
        </DivBotao>
        </Formulario>

      </DivFormulario>

      
    </Container>
  )

}
