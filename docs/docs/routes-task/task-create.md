---
sidebar_position: 2
---

# POST /

Create a new task for the authenticated user.

**Request**

- **URL**: `/`
- **Method**: `POST`
- **Headers**: `Authorization: Bearer <token> (Required)`
- **Body**:
  - `task: string`

**Response**

- Status: `201 Created`
- Response Example:

```json
{
  "newTask": {
    "order": 25,
    "completed": false,
    "isActive": true,
    "id": 33,
    "title": "test task",
    "description": "",
    "userId": 4,
    "updatedAt": "2024-10-08T20:21:39.216Z",
    "createdAt": "2024-10-08T20:21:39.216Z"
  }
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
  "message": "No Task was provided"
}
```
