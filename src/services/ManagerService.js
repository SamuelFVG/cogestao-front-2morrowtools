import * as requesterService from "./RequesterService";

export const usePostTool = async (data) => {
  let aiTools = {};
  await requesterService
    .postTool(data)
    .then((res) => {
      aiTools = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return aiTools;
};

//fazer função get, delete, put
