# Bloomberg Terminal OCR to Google Sheets Application

## 📌 Overview

This Next.js application is designed to automate data extraction from Bloomberg Terminal screenshots using Optical Character Recognition (OCR) and seamlessly upload the extracted data into Google Sheets. It provides various dedicated forms tailored for different Bloomberg data categories such as Points, Curves, Volatility, Inflation, Spots, and Seasonality.

---

## 🚀 Features

* **OCR Integration:** Extract data from Bloomberg Terminal screenshots automatically.
* **Dynamic Forms:** Specific forms for different data types including Points, Curves, Spots, Volatility, Inflation, and Seasonality.
* **Google Sheets Integration:** Automated data upload directly into Google Sheets via an n8n workflow.
* **Real-time Notifications:** Users are notified via toast messages when workflows start and complete.

---

## 🔧 Technologies Used

* **Next.js:** Frontend framework
* **Tailwind CSS:** Styling
* **shadcn/ui:** UI components
* **React Hook Form & Zod:** Form handling and validation
* **PaddleOCR (Python API):** OCR functionality
* **n8n:** Workflow automation
* **Google Sheets API:** Data upload
* **Docker:** Containerization

---

## 📂 Project Structure

```
app/
├── page.tsx
components/
├── PointsForm.tsx
├── CurvesForm.tsx
├── VolatilityForm.tsx
├── InflationForm.tsx
├── SpotsForm.tsx
├── SeasonalityForm.tsx
├── ImageUpload.tsx
├── LoadingButton.tsx
actions/
├── n8n.ts
scripts/
├── main.py (Python OCR API)
Dockerfile
requirements.txt
```

---

## 🛠️ Getting Started

### Prerequisites

* Node.js
* Docker & Docker Compose
* Google Sheets account and API credentials
* n8n instance

### Installation and Running the App

#### Using Docker (running in local permanently and starts on restart, only stops when using the down command below)

1) Clone repository and install dependencies:

```bash
git clone <repository-url>
cd bloomberg-ocr-nextjs-app
```

2) Set your environment variables in a `.env` file in root:

```env
N8N_WEBHOOK_URL1=<your-n8n-webhook-url> (only the the main website link where n8n is hosted with "/" in the end)
N8N_WEBHOOK_URL2=<your-n8n-webhook-url>
```

3) Build Docker Container:

```bash
docker compose build
docker compose up -d
```

4) Open the app in browser - http://localhost:5103

5) Stop the app by below command: in the root directory of this app

```bash
docker-compose down
```

### Using Npm in Dev Mode

1) Clone repository and install dependencies:

```bash
git clone <repository-url>
cd bloomberg-ocr-frontend
npm install
```

2) Set your environment variables in a `.env` file in root:

```env
N8N_WEBHOOK_URL1=<your-n8n-webhook-url> (only the the main website link where n8n is hosted with "/" in the end)
N8N_WEBHOOK_URL2=<your-n8n-webhook-url>
```

3) Running Locally
```bash
npm run dev
```

4) Open the app in browser - http://localhost:3000


---

## 📑 Forms and Functionality

### PointsForm

* Input: Currency, Bloomberg Terminal screenshot
* Workflow: Extracts "Points" data and updates Google Sheet

### CurvesForm

* Input: Curve Number, Bloomberg Terminal screenshot
* Workflow: Extracts "Curves" data

### VolatilityForm

* Input: Currency Pair, Bloomberg Terminal screenshot
* Workflow: Extracts "Volatility" data

### InflationForm

* Input: Base Index, Bloomberg Terminal screenshot
* Workflow: Extracts "Inflation" data

### SpotsForm

* Input: Bloomberg Terminal screenshot
* Workflow: Extracts "Spots" data

### SeasonalityForm

* Input: Bloomberg Terminal screenshot
* Workflow: Extracts "Seasonality" data

---

## 🚦 Workflow Automation (n8n)

Ensure your n8n workflows are properly configured to receive data from the provided webhook URLs. Data extracted via OCR is sent to n8n, which then updates the designated Google Sheets.
