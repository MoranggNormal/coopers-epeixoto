---
sidebar_position: 1
---

# POST /register

Register a new user and return a JWT token to Sign in.

**Request**

- **URL**: `/register`
- **Method**: `POST`
- **Body**:
  - `name: string`
  - `email: string`
  - `password: string, min length: 6`

**Response**

- Status: `201 Created`
- Response Example:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJuYW1lIjoiZXVsbGVyIiwiZW1haWwiOiJkZXBlaXhkZG9kZHRvLmRldkBnbWFpbC5jb20ifSwiaWF0IjoxNzI4NDE3NzcyLCJleHAiOjE3MjkwMjI1NzJ9.dA1DtV6Fv8RV1G9YYqZ2M4uAe6Z68owX7HsL98DBAY0"
}
```

- Status: `400 Bad Request`
- Response Example:

```json
{
  "message": "User already exists"
}
```

- Status: `500 Internal Server Error`
- Response Example:

```json
{
  "message": "Server error"
}
```
