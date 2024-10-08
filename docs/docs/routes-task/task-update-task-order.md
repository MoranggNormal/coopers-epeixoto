---
sidebar_position: 6
---

# PUT /updateTaskOrder

Update tasks order.

**Request**

- **URL**: `/updateTaskOrder`
- **Method**: `PUT`
- **Headers**: `Authorization: Bearer <token> (Required)`
- **Body**:

```json
{
  "tasks": [
    {
      "id": 40,
      "order": 2
    },
    {
      "id": 36,
      "order": 3
    },
    {
      "id": 37,
      "order": 4
    },
    {
      "id": 38,
      "order": 5
    },
    {
      "id": 39,
      "order": 6
    }
  ]
}
```

**Response**

- Status: `200 OK`
- Response Example:
```json
{
  "message": "Task Order updated successfully"
}
```

- Status: `400 Bad Request`
- Response Example:

```json
{
  "message": "No Tasks was provided"
}
```

- Status: `500 Internal Server Error`
- Response Example:

```json
{
  "message": "No Task was provided"
}
```
