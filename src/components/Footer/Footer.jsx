import { Container, ContainerMenu } from "./Styles";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerMenu>
        <img onClick={() => navigate("/")} src={logo} />
      </ContainerMenu>

    </Container>
  );
}