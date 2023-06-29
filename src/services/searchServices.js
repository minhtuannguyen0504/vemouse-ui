import * as request from "~/untils/request";

export const search = async () => {
  try {
    const res = await request.get("products");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
