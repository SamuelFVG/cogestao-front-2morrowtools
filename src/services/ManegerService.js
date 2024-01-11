import * as requesterService from "./RequesterService";

export async function UseGetTools() {
  try {
    return await requesterService.getTools();
  } catch (error) {
    return error;
  }
}
