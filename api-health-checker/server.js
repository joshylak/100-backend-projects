import express from "express";
import axios from "axios";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 8080;

// Load API list
const apis = JSON.parse(fs.readFileSync("./apis.json", "utf8"));

// Health check function
const checkAPI = async (api) => {
  try {
    const start = Date.now();
    const response = await axios.get(api.url, { timeout: 5000 });
    const time = Date.now() - start;

    return {
      name: api.name,
      url: api.url,
      status: "Healthy ✅",
      httpStatus: response.status,
      responseTime: `${time} ms`,
      checkedAt: new Date().toISOString(),
    };
  } catch (error) {
    return {
      name: api.name,
      url: api.url,
      status: "Unhealthy ❌",
      error: error.message,
      checkedAt: new Date().toISOString(),
    };
  }
};

// Route: check all APIs
app.get("/health", async (req, res) => {
  const results = await Promise.all(apis.map(checkAPI));
  res.json({
    success: true,
    total: results.length,
    results,
  });
});

// Route: check single API by name
app.get("/health/:name", async (req, res) => {
  const api = apis.find((a) => a.name.toLowerCase() === req.params.name.toLowerCase());
  if (!api) return res.status(404).json({ success: false, message: "API not found" });

  const result = await checkAPI(api);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`🚀 API Health Checker running on port ${PORT}`);
});
