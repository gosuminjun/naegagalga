import { AxiosResponse } from "axios";
//TODO : 나중에 token instance로 바꿀것
import apiTokenInstance from "./apiInstance";

async function getChatRooms(userIndex: number) {
  const response: AxiosResponse = await apiTokenInstance.get(
    `/api/chat/rooms/${userIndex}`
  );
  return response;
}

export { getChatRooms };