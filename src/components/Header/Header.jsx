import { Container, ContainerMenu, Buttons, LoginButton, ToolsButton } from "./Styles";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerMenu>
        <img onClick={() => navigate("/")} src={logo} />
      </ContainerMenu>
      <Buttons>
        <LoginButton onClick={() => navigate("login")}>Login e Cadastro</LoginButton>
        <ToolsButton onClick={() => navigate("/")}>Ferramentas</ToolsButton>
      </Buttons>
    </Container>
  );
}
