import api from "./api";

export const getFerramentas = async (filters = {}) => {
  const { data } = await api.get("/ferramentas", { params: filters });

  return data;
};

export const createFerramenta = async (newFerramenta) => {
  const { data } = await api.post("/ferramentas, newFerramenta");

  return data;
};
