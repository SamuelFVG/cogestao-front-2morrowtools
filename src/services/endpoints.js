import api from "./instance";

export const createTool = async (newTool) => {
  const { data } = await api.post(`/IA`, newTool);

  return data;
};

export const getTool = async (filters = {}) => {
  const { data } = await api.get(`/IA`, { params: filters });

  return data;
};

export const updateTool = async ({ _id, newToolData }) => {
  const { data } = await api.put(`/IA/${_id}`, newToolData);

  return data;
};
export const deleteTool = async (_id) => {
  const { data } = await api.delete(`/IA/${_id}`);

  return data;
};
