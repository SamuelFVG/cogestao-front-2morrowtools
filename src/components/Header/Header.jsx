import { Container, ContainerMenu, ToolsButton, SignUpButoon, Buttons } from "./Styles";
import logo from "../../assets/logo.svg";
import { redirect, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerMenu>
        <img onClick={() => redirect("/")} src={logo} />
      </ContainerMenu>
      <Buttons>
        <SignUpButoon onClick={() => navigate("/signup")}>Login e Cadastro</SignUpButoon>
        <ToolsButton onClick={() => navigate("/")}>Página das Ferramentas</ToolsButton>
      </Buttons>
    </Container>
  );
}
