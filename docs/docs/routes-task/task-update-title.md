---
sidebar_position: 3
---

# PUT /:id

Update a task title for the authenticated user.

**Request**

- **URL**: `/:id`
- **Method**: `PUT`
- **Headers**: `Authorization: Bearer <token> (Required)`
- **Body**:
  - `id: task id`,
  - `title: string`

**Response**

- Status: `200 OK`
- Response Example:

```json
{
  "message": "Task title updated successfully",
}
```

- Status: `401 Unauthorized`
- Response Example:

```json
{
  "message": "Token is not valid"
}
```

- Status: `400 Bad Request`
- Response Example:

```json
{
  "message": "No title was provided"
}
```

- Status: `500 Internal Server Error`
- Response Example:

```json
{
  "message": "Internal Server Error"
}
```
