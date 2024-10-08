---
sidebar_position: 1
---

# POST /

Send a simple mail for given e-mail

**Request**

- **URL**: `/`
- **Method**: `POST`
- **Body**:
  - `email: string`
  - `phone: string`
  - `message: string`

**Response**

- Status: `200 OK`
- Response Example:

```json
{
  "message": "Mail sent"
}
```

- Status: `500 Internal Server Error`
- Response Example:

```json
{
  "message": "Internal Server Error"
}
```
