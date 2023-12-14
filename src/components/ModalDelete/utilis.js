const deleteFerramentaErrorMessages = {
  404: "Essa ferramenta não existe",
};

const deleteFerramentaDefaultErrorMessage =
  "Erro ao deletar a ferramenta. Tente novamente mais tarde";

export function buildDeleteFerramentaErrorMessage(err) {
  const code = err?.response?.data?.httpCode;
  return deleteFerramentaErrorMessages[code] || deleteFerramentaDefaultErrorMessage;
}
