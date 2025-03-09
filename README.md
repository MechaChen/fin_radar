# fin_radar

# FinRadar 專案階段性實作規劃

## 🔧 第一階段：後端基礎建置（約 1.5 週）

### 📌 每日任務

- **Day 1-2**

  - 建立 Node.js 專案，選擇後端框架（Express 或 Fastify）
  - 確認 Node.js 開發環境與伺服器運行

- **Day 3**

  - 建立基本 API 路由與測試端點
  - 實作簡單 API 測試（如 `/health` endpoint）

- **Day 4-5**

  - 實作 Server-Sent Events (SSE) 基本端點與測試
  - 使用 Lynx.js 或 React 開發前端功能

- **Day 6-7**

  - 串接金融 API（虛擬貨幣：CoinGecko；股票：Alpha Vantage）
  - 完成金融數據擷取流程

- **Day 8-9**

  - 使用 Redis Pub/Sub 快取金融 API 資料（5 秒更新週期）
  - 實作個人化即時資料取得與快取機制，使用 Local Storage 儲存使用者個人化設定（如個人化股票、虛擬貨幣追蹤）
  - 測試 Redis Pub/Sub 架構效能與穩定性

- **Day 10 (休息與緩衝日)**

---

## 📡 第二階段：AWS 雲端部署與前端整合

### 📌 每日任務

- **Day 11-12**

  - 使用 AWS CDK 建置基礎架構（VPC、EC2、Security Group）
  - 將後端部署到 EC2，驗證 API、Redis Pub/Sub 與 SSE 功能

- **Day 13-14**

  - 配置 AWS Load Balancer（ALB）並連接至 EC2
  - 使用 Route 53（或其他 DNS 服務）設定自有域名指向 ALB
  - 使用 AWS Certificate Manager 建立 SSL 證書並配置至 ALB

- **Day 15 (休息與緩衝日)**

- **Day 16-18**

  - 使用 Lynx.js 或 React 建立前端基礎應用，透過 SSL 自有域名展示即時數據（透過 ALB 與 SSE）

---

## 🤖 第三階段：AI 整合（MCP）（約 1 週）

- **Day 19-20**

  - 學習並實作 Model Context Protocol (MCP)
  - 金融數據透過 MCP 提供給 AI 模型（OpenAI 或 Claude）

- **Day 21-22**

  - 完成 AI 資料串接與即時建議推播流程

- **Day 21 (休息與緩衝日)**

---

## 🌐 第四階段：PWA 部署（約 1 週）

- **Day 22-24**

  - 整合 Service Worker
  - 實作 PWA 的離線緩存功能，支援離線運作
  - **使用 IndexedDB 儲存 AI 對話歷史，支援離線存取**

- **Day 25 (休息與緩衝日)**

---

## 🔒 第五階段：測試與優化（約 1 週）

- **Day 26-28**

  - 全面測試後端功能與前端整合，效能優化
  - 驗證自有域名及 SSL 設定

- **Day 29 (休息與緩衝日)**

---

以上階段任務，建議逐步推進，並可根據每日成果動態調整計畫。

