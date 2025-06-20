import axios, { AxiosResponse } from "axios";
import { handleApiError } from "@/utils/ApiErrorUtil";

const BASE_SERVER_URL = "http://localhost:8080/api" as const;
const REQUEST_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
} as const;

export const get = async (uri: string): Promise<object> => {
  return await axios
    .get(BASE_SERVER_URL + uri, REQUEST_CONFIG)
    .then((res) => {
      console.log(`[GET] ${uri} - `, res);
      return res.data;
    })
    .catch(handleApiError);
};

export const post = async (uri: string, body?: object): Promise<number> => {
  function extractLocationHeader(res: AxiosResponse) {
    const locationHeader = res.headers["location"];
    if (!locationHeader) {
      throw new Error("Location Header is missing in the response");
    }
    return locationHeader;
  }

  return await axios
    .post(BASE_SERVER_URL + uri, body, REQUEST_CONFIG)
    .then((res) => {
      console.log(`[POST] ${uri} - `, res);
      const locationHeader = extractLocationHeader(res);
      return parseInt(locationHeader.split("/").pop() || "", 10);
    })
    .catch((err) => {
      handleApiError(err);
      throw err;
    });
};

export const patch = async (uri: string, body: object): Promise<void> => {
  await axios
    .patch(BASE_SERVER_URL + uri, body, REQUEST_CONFIG)
    .then((res) => console.log(`[PATCH] ${uri} - `, res))
    .catch(handleApiError);
};

export const remove = async (uri: string): Promise<void> => {
  await axios
    .delete(BASE_SERVER_URL + uri, REQUEST_CONFIG)
    .then((res) => console.log(`[DELETE] ${uri} - `, res))
    .catch(handleApiError);
};
