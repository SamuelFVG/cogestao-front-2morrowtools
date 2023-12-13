import { z } from "zod";

export const createFerramentaValidationSchema = z.object({
  nome: z.string(),
  descricao: z.string(),
  link: z.string(),
});

const createFerramentaErrorMessages = {
  400: "Dados inválidos",
  409: "Ferramenta já existente no banco de dados",
};
const createFerramentaDefaultErrorMessage =
  " Ocorreu um erro na criação da ferramenta. Tente novamente mais tarde";

export function buildCreateFerramentaErrorMessage(err) {
  const code = err?.respose?.data?.htppCode;
  return createFerramentaErrorMessages[code] || createFerramentaDefaultErrorMessage;
}
