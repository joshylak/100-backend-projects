import express from "express";
import { parseUserAgent } from "./utils/parseUserAgent.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const userAgentString = req.headers["user-agent"];
  const parsedData = parseUserAgent(userAgentString);

  res.json({
    success: true,
    raw: userAgentString,
    parsed: parsedData
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
