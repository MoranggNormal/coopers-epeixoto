---
sidebar_position: 5
---

# PUT /markTaskAsComplete

Set a task as complete for the authenticated user.

**Request**

- **URL**: `/markTaskAsComplete`
- **Method**: `PUT`
- **Headers**: `Authorization: Bearer <token> (Required)`
- **Body**:
  - `id: task id`,

**Response**

- Status: `200 OK`
- Response Example:
```json
{
  "message": "Task completed successfully"
}
```

- Status: `400 Bad Request`
- Response Example:

```json
{
  "message": "No Task was provided"
}
```

- Status: `500 Internal Server Error`
- Response Example:

```json
{
  "message": "Internal Server Error"
}
```
