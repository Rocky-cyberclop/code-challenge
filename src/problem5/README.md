# 📘 Simple Resource API

This is a simple Express + TypeScript + SQLite API that demonstrates basic CRUD operations.

---

## 🚀 1. Setup & Run Locally

### Requirements
- Node.js (v18+)
- Yarn

### Install dependencies
```bash
yarn install
```

### Run the app in development
```bash
yarn dev
```

### Build for production
```bash
yarn build
```

### Start production server
```bash
yarn start
```

The server will start by default at:
👉 **http://localhost:3000**

---

## ⚙️ 2. API Endpoints

Base URL:
```
http://localhost:3000/api/resources
```

---

### 🧩 Create a Resource

**POST** `/api/resources`

**Body (JSON):**
```json
{
  "name": "My Resource",
  "description": "A short description of this resource"
}
```

**Response (201):**
```json
{
  "id": 1,
  "name": "My Resource",
  "description": "A short description of this resource"
}
```

---

### 📋 View All Resources

**GET** `/api/resources`

Example response:
```json
[
  {
    "id": 1,
    "name": "My Resource",
    "description": "A short description"
  },
  {
    "id": 2,
    "name": "Another Resource",
    "description": "Some details"
  }
]
```

---

### 🔍 View All Resources with Filter

**GET** `/api/resources?filter=keyword`

Returns only resources whose **name** contains the keyword (case-insensitive).

Example:
```
GET http://localhost:3000/api/resources?q=My
```

Response:
```json
[
  {
    "id": 1,
    "name": "My Resource",
    "description": "A short description"
  }
]
```

---

### 📄 View a Single Resource

**GET** `/api/resources/:id`

Example:
```
GET http://localhost:3000/api/resources/1
```

Response:
```json
{
  "id": 1,
  "name": "My Resource",
  "description": "A short description"
}
```

---

### ✏️ Update a Resource

**PUT** `/api/resources/:id`

**Body (JSON):**
```json
{
  "name": "Updated Resource",
  "description": "Updated description"
}
```

Response:
```json
{
  "id": 1,
  "name": "Updated Resource",
  "description": "Updated description"
}
```

---

### ❌ Delete a Resource

**DELETE** `/api/resources/:id`

Example:
```
DELETE http://localhost:3000/api/resources/1
```

Response (204 No Content):
```
(empty body)
```

---

## 🧪 3. Testing with Postman

1. Import each of the above requests into Postman.
2. Use the same base URL: `http://localhost:3000/api/resources`.
3. Test endpoints in order:
   - `POST` → create a resource
   - `GET` → list all
   - `GET ?filter=` → test search
   - `GET /:id` → get single
   - `PUT /:id` → update
   - `DELETE /:id` → remove

---
