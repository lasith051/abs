# Laka FX - WhatsApp Bot 💬🇱🇰

A simple WhatsApp bot using [Baileys](https://github.com/WhiskeySockets/Baileys) to provide currency exchange information in **English and Sinhala**.

## 📦 Features

- 💬 Auto-replies to greetings
- 💱 Currency exchange command: `fx rate`
- 🌐 Multilingual replies (English + Sinhala)
- 🔐 Secure authentication with QR code

## 🚀 How to Use

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Bot

```bash
node index.js
```

Scan the QR code from your WhatsApp to connect.

## 🧪 Commands

| Command        | Description                       |
|----------------|-----------------------------------|
| `hi` / `hello` | Sends a welcome message           |
| `fx rate`      | Shows exchange rate (USD to LKR)  |
| `rate sinhala` | Sinhala version of exchange rate  |

## 📁 Files

- `index.js`: Bot logic using Baileys
- `package.json`: Project config
- `auth_info.json`: Saved auth data (created at runtime)

## 📌 Requirements

- Node.js v16+
- WhatsApp number

---

Created by 🇱🇰 with ❤️ — Customize it further to add more commands!
