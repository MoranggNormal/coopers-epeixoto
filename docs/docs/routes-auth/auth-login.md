---
sidebar_position: 2
---

# POST /login

Authenticate a user and return a JWT token for future requests.

**Request**

- **URL**: `/login`
- **Method**: `POST`
- **Body**:
  - `email: string`
  - `password: string`

**Response**

- Status: `200 OK`
- Response Example:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJuYW1lIjoiZXVsbGVyIiwiZW1haWwiOiJldWxsZXJAZXVsbGVyLmNvbSJ9LCJpYXQiOjE3Mjg0MTgwNzksImV4cCI6MTcyOTAyMjg3OX0.SfwCx04tkMuoAiV7Y4u0DGT8e4af5tXUTV-pjnZE26M"
}
```

- Status: `400 Bad Request`
- Response Example:

```json
{
  "message": "Invalid credentials"
}
```

- Status: `500 Internal Server Error`
- Response Example:

```json
{
  "message": "Server error"
}
```
