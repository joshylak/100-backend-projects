import { v4 as uuidv4 } from "uuid";

export const createPostmanCollection = (name, requests) => {
  return {
    info: {
      _postman_id: uuidv4(),
      name: name,
      schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    item: requests.map(req => ({
      name: req.name,
      request: {
        method: req.method || "GET",
        header: req.headers || [],
        body: req.body
          ? { mode: "raw", raw: JSON.stringify(req.body, null, 2) }
          : {},
        url: {
          raw: req.url,
          protocol: req.url.split("://")[0],
          host: req.url.split("://")[1]?.split("/")[0].split("."),
          path: req.url.split("://")[1]?.split("/").slice(1)
        }
      }
    }))
  };
};
