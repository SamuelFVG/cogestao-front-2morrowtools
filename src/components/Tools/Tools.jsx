import { GPT } from "../../assets";
import {
  Titulo_ferramentas,
  CabecalhoFerramenta1,
  Teste1,
  Botoes,
  Botao1,
  Botao2,
  Explicacao,
  Alinhamento,
  Imagem_ferramenta1,
} from "./Styles";
import { } from "antd";

export default function Tools() {
  return (
    <>
      <Titulo_ferramentas>FERRAMENTAS CRIADAS </Titulo_ferramentas>
      <CabecalhoFerramenta1>
        <Teste1> Teste da ferramenta 1</Teste1>
        <Botoes>
          <Botao1></Botao1>
          <Botao2></Botao2>
        </Botoes>
      </CabecalhoFerramenta1>
      <Explicacao>Aqui vai ficar a descrição curta da ferramenta</Explicacao>
      <Alinhamento>
        <Imagem_ferramenta1 src={GPT}></Imagem_ferramenta1>
      </Alinhamento>
    </>
  );
}
