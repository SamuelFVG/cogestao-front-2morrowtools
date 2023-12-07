import { useState } from "react";
import { Container, Input, Button, Form } from "./Styles";

export default function Favorites() {
  const [errors, setErrors] = useState([]);
  const [values, setValues] = useState({});

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });

    for (let key in values) {
      if (!values[key]) setErrors({ ...errors, [key]: true });
      else setErrors({ ...errors, [key]: false });
    }
  }
  console.log(values);
  console.log(errors);
  return (
    <Container>
      <Form>
        <div>
          <label>Nome</label>
          <Input placeholder='Digite o nome' name='name' onChange={onChange} />
        </div>

        <div>
          <label>Url de imagem</label>
          <Input placeholder='Digite URL' name='imageUrl' onChange={onChange} />
        </div>

        <Button>Enviar</Button>
      </Form>
    </Container>
  );
}
