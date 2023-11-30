import { string } from "prop-types";
import {
  Container,
  Title1,
  Firstpart,
  InputArea,
  FormInput,
  ButtonSalvar,
  DivCentralizar,
  SecondPart,
  Title2,
  Title3,
  ThirdPart,
  Title4,
  Espaçamento,
} from "./Styles";
import { Input, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";

export default function Favorites() {
  const tools = [
    {
      name: "Teste da Ferramenta 1",
      description: "Aqui vai ficar a descrição curta da ferramenta",
      imageUrl:
        "https://clubedamicha.com/wp-content/uploads/2023/03/Clube-da-Micha-e1677836370447.jpeg",
    },
    {
      name: "Teste da Ferramenta 2",
      description: "Aqui vai ficar a descrição curta da ferramenta",
      imageUrl: "https://www.datarain.com.br/wp-content/uploads/2020/02/iar.jpg",
    },
    {
      name: "Teste da Ferramenta 3",
      description: "Aqui vai ficar a descrição curta da ferramenta",
      imageUrl: "https://www.bi4all.pt/app/uploads/2020/06/vantagens-ai-2.png",
    },
  ];
  return (
    <Container>
      <Firstpart>
        <Title1>CRIAR NOVA FERRAMENTA</Title1>
        <InputArea>
          <label>Nome</label>
          <FormInput placeholder={"GPT"} />
        </InputArea>
        <InputArea>
          <label>Upload de imagem</label>
          <FormInput placeholder={"http://google"} />
        </InputArea>
        <InputArea>
          <label>Descrição curta</label>
          <FormInput placeholder={"Escreva aqui a sua descrição"} />
        </InputArea>
      </Firstpart>
      <DivCentralizar>
        <ButtonSalvar>Salvar</ButtonSalvar>
      </DivCentralizar>
      <SecondPart>
        <Title2>FERRAMENTAS CRIADAS</Title2>
      </SecondPart>
      <ThirdPart>
        {tools.map(function (tool) {
          return (
            <div key={tool.name} style={{ display: "flex", flexDirection: "column" }}>
              <Title3>
                <div>{tool.name}</div>
                <Espaçamento>
                  <EditOutlined />
                  <DeleteOutlined />
                </Espaçamento>
              </Title3>
              <Title4>{tool.description}</Title4>
              <img src={tool.imageUrl} style={{ width: "50vw" }} />
            </div>
          );
        })}
      </ThirdPart>
    </Container>
  );
}
