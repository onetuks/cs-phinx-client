import { AxiosError } from "axios";

export const handleApiError = async (error: AxiosError) => {
  if (!error.response) throw new Error("서버통신에 실패했습니다.");
  switch (error.response.status) {
    case 400:
      console.error("400 Bad Request");
      break;
    case 403:
      console.error("403 Not Authorized");
      break;
    case 404:
      console.error("404 Not Found");
      break;
    case 500:
      console.error("500 Internal Server Error");
      break;
    default:
      break;
  }
};
