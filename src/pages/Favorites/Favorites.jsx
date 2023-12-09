import { useState } from "react";
import { Container, Input, Button, Form, Body } from "./Styles";

export default function Favorites() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({ name: "", imageUrl: "" });

  function onChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit() {
    const errors = {};
    for (let name in values) {
      errors[name] = !values[name];
    }
    setErrors(errors);

    if (errors.name || errors.imageUrl) console.log("Preencha todos os campos");
    else console.log("Form submitted:", values);
  }

  return (
    <Body>
      <Form>
        <Container error={errors.name}>
          <label>Nome</label>
          <Input placeholder='Digite o nome' name='name' onChange={onChange} />
          <span>Digite o nome</span>
        </Container>
        <Container error={errors.imageUrl}>
          <label>Url de imagem</label>
          <Input placeholder='Digite URL' name='imageUrl' onChange={onChange} />
          <span>Digite a url</span>
        </Container>
        <Button onClick={onSubmit}>Enviar</Button>
      </Form>
    </Body>
  );
}
