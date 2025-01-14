import axios from "axios";
import { handleApiError } from "@/apis/ApiErrorUtil";

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
  return await axios
    .post(BASE_SERVER_URL + uri, body, REQUEST_CONFIG)
    .then((res) => {
      console.log(`[POST] ${uri} - `, res);
      const locationHeader = res.headers["location"];
      if (!locationHeader) {
        throw new Error("Location Header is missing in the response");
      }
      return parseInt(locationHeader.split("/").pop() || "", 10);
    })
    .catch((err) => {
      handleApiError;
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

export const arrayToDate = (date: Date): Date => {
  const dateArray: number[] = Array.isArray(date) ? (date as number[]) : [];
  return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
};
