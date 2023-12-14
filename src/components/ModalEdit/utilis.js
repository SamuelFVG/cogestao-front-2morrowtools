import { z } from "zod";

export const updateFerramentaValidationSchema = z.object({
  nome: z.string(),
  descricao: z.string(),
  link: z.string(),
});

const updateFerramentaErrorMessages = {
  400: "Dados inválidos",
  409: "Ferramenta já existente no banco de dados",
};

const updateFerramentaDefaultErrorMessage =
  "Ocorreu um erro na criação da ferramenta. Tente novamente mais tarde";

export function buildUpdateFerramentaErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return updateFerramentaErrorMessages[code] || updateFerramentaDefaultErrorMessage;
}
