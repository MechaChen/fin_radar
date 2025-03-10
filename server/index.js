import express from "express";
import finnhub from "finnhub";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express with TypeScript!");
});

const symbols = ["AAPL", "NVDA", "TSLA", "GOOGL", "AMZN"]; // 要查詢的美股

app.get("/america-stock", async (req, res) => {
  try {
    const results = await Promise.all(
      symbols.map((symbol) =>
        new Promise((resolve, reject) => {
          finnhubClient.quote(symbol, (error, data) => {
            if (error) reject(error);
            else resolve({ symbol, ...data });
          });
        })
      )
    );
    res.json(results);
  } catch (err) {
    console.error("❌ 查詢失敗:", err);
    res.status(500).json({ error: "查詢失敗" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});