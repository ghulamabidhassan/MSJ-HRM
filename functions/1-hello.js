import { nanoid } from "nanoid";
import { data } from "./data";

const id = nanoid(8);

const person = {
  name: "Abid",
};

let str = "How are you? get me this";

export const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      id,
      status: "success",
      data: event,
    }),
  };
};
