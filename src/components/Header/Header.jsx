import { Container, ContainerMenu, ToolsButton } from "./Styles";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerMenu>
        <img onClick={() => navigate("/")} src={logo} />
      </ContainerMenu>
      <ToolsButton>Página das Ferramentas</ToolsButton>
    </Container>
  );
}
