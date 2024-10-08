---
sidebar_position: 1
---

# GET /

Retrieve active tasks for the authenticated user.

**Request**

- **URL**: `/`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer <token> (Required)`

**Response**

- Status: `200 OK`
- Response Example:

```json
{
  "pending": [
    {
      "id": 31,
      "title": "test",
      "order": 23,
      "completed": false,
      "createdAt": "2024-10-08T20:17:12.158Z",
      "updatedAt": "2024-10-08T20:17:12.158Z",
    },
    {
      "id": 32,
      "title": "test 2",
      "order": 24,
      "completed": false,
      "createdAt": "2024-10-08T20:17:25.193Z",
      "updatedAt": "2024-10-08T20:17:25.193Z",
    }
  ],
  "completed": [
        {
      "id": 32,
      "title": "new test",
      "order": 24,
      "completed": true,
      "createdAt": "2024-10-08T20:17:31.123Z",
      "updatedAt": "2024-10-08T20:17:31.123Z",
    }
  ]
}
```

- Status: `500 Internal Server Error`
- Response Example:

```json
{
  "message": "Error fetching tasks"
}
```
