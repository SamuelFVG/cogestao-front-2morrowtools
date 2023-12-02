import api from "./api";

//post- cria uma nova informação no banco de dados
//get - apenas lê alguma informação do banco de dados
//put - atualiza algum dado do banco de dados
//delete - deleta algum dado do banco de dados

//fields seria toda a informação que o backend

//A informação é recebida pelo "controlador" depois de passar pelo manager

//Tools
export const postTool = (data) => api.post("/Tools", data);
