import { nanoid } from "nanoid";
import { data } from "../data";

const id = nanoid(8);

export const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      id,
      status: "success",
      statusCode: 200,
      data,
      output: event,
    }),
  };
};
