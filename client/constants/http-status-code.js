export const HTTP_EXCEPTIONS = {
  BAD_REQUEST: {
    code: 400,
    message: "Bad Request",
    description:
      "The server could not understand the request due to invalid syntax.",
  },
  UNAUTHORIZED: {
    code: 401,
    message: "Unauthorized",
    description:
      "The client must authenticate itself to get the requested response.",
  },
  FORBIDDEN: {
    code: 403,
    message: "Forbidden",
    description: "The client does not have access rights to the content.",
  },
  NOT_FOUND: {
    code: 404,
    message: "Not Found",
    description: "The server can not find the requested resource.",
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    message: "Method Not Allowed",
    description:
      "The request method is known by the server but has been disabled.",
  },
  CONFLICT: {
    code: 409,
    message: "Conflict",
    description: "The request conflicts with the current state of the server.",
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    message: "Internal Server Error",
    description:
      "The server has encountered a situation it doesn't know how to handle.",
  },
  NOT_IMPLEMENTED: {
    code: 501,
    message: "Not Implemented",
    description:
      "The request method is not supported by the server and cannot be handled.",
  },
  BAD_GATEWAY: {
    code: 502,
    message: "Bad Gateway",
    description:
      "The server, while acting as a gateway or proxy, received an invalid response.",
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    message: "Service Unavailable",
    description: "The server is not ready to handle the request.",
  },
  GATEWAY_TIMEOUT: {
    code: 504,
    message: "Gateway Timeout",
    description:
      "The server, while acting as a gateway or proxy, did not get a response in time.",
  },
};
