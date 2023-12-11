import PropTypes from "prop-types";

import { Container, Input } from "./Styles.js";

export default function RegisterInput({ name, register }) {
  return (
    <Container>
      <Input id={name} {...register(name)} />
    </Container>
  );
}

RegisterInput.PropTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
