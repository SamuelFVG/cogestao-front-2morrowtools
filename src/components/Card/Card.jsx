import { Container, Description, Title, Image } from "./Styles";

export default function CardFerramenta({ tool }) {
  const { name, description, imageUrl } = tool;
  return (
    <Container>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Image src={imageUrl} alt={name}></Image>
    </Container>
  );
}
