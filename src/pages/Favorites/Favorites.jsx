import { string } from "prop-types";
import { Container, Title1, Firstpart, InputArea } from "./Styles";
import { Input } from "antd";
export default function Favorites() {
  return (
    <Container>
      <Firstpart>
        <Title1>CRIAR NOVA FERRAMENTA</Title1>
        <InputArea>
          Nome
          <Input placeholder='nome' />
        </InputArea>
      </Firstpart>
    </Container>
  );
}
