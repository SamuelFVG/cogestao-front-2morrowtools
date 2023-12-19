import PropTypes from "prop-types";

import { Container, Input } from "./Style.js";

export default function RegisterInputModal({ name, register }) {
  return (
    <Container>
      <Input id={name} {...register(name)} />
    </Container>
  );
}

RegisterInputModal.PropTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
