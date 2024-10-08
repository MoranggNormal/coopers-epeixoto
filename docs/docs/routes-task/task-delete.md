---
sidebar_position: 4
---

# DELETE /:id

Delete (only set it as inactive) a task for the authenticated user.

**Request**

- **URL**: `/:id`
- **Method**: `DELETE`
- **Headers**: `Authorization: Bearer <token> (Required)`
- **Body**:
  - `id: task id`,

**Response**

- Status: `200 OK`
- Response Example:

```json
{
  "message": "Task deleted successfully"
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
  "message": "No task was provided"
}
```

- Status: `500 Internal Server Error`
- Response Example:

```json
{
  "message": "Internal Server Error"
}
```
