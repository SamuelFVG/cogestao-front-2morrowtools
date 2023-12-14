import api from "./api";

export const getFerramentas = async (filters = {}) => {
  const { data } = await api.get("/ferramentas", { params: filters });

  return data;
};

export const createFerramenta = async (newFerramenta) => {
  const { data } = await api.post("/ferramentas", newFerramenta);

  return data;
};

export const updateFerramenta = async ({ _id, newFerramentaData }) => {
  const { data } = await api.put(`/ferramentas/${_id}`, newFerramentaData);

  return data;
};

export const deleteFerramenta = async (_id) => {
  const { data } = await api.delete(`/ferramentas/${_id}`);

  return data;
};
