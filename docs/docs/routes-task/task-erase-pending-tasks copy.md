---
sidebar_position: 7
---

# DELETE /erasePendingTasks

Delete (only set it as inactive) all pending tasks for the authenticated user.

**Request**

- **URL**: `/erasePendingTasks`
- **Method**: `DELETE`
- **Headers**: `Authorization: Bearer <token> (Required)`

**Response**

- Status: `200 OK`
- Response Example:

```json
{
  "message": "Tasks deleted successfully"
}
```

- Status: `401 Unauthorized`
- Response Example:

```json
{
  "message": "Token is not valid"
}
```

- Status: `500 Internal Server Error`
- Response Example:

```json
{
  "message": "Internal Server Error"
}
```
