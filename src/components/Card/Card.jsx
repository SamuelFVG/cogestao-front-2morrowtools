import { DivImagem, DivCard, DivDescricao, DivNomeFerramenta, DivNomeIcons, Imagem } from "./Styles";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function Card() {
  return <DivCard>
    <DivNomeIcons> 
    <DivNomeFerramenta>Teste da ferramenta 1</DivNomeFerramenta> 
    <FaRegTrashAlt></FaRegTrashAlt> 
    <HiOutlinePencilAlt></HiOutlinePencilAlt>
    </DivNomeIcons>

    
    <DivDescricao>Descricao da ferramenta ela é muito boa mesmo</DivDescricao>
    <DivImagem>
      <Imagem src="https://picsum.photos/id/237/536/354"></Imagem>
    </DivImagem>
    </DivCard>;
}
