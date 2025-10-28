export const STATUS_CODE = {
  // 2xx Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,

  // 3xx Redirection
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  NOT_MODIFIED: 304,

  // 4xx Client errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  CONFLICT: 409,
  GONE: 410,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,

  // 5xx Server errors
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

export const RESPONSE_MESSAGE = {
  // General
  SUCCESS: "Request processed successfully",
  CREATED: "Resource created successfully",
  UPDATED: "Resource updated successfully",
  DELETED: "Resource deleted successfully",

  // Authentication
  LOGIN_SUCCESS: "User logged in successfully",
  LOGOUT_SUCCESS: "User logged out successfully",
  REGISTER_SUCCESS: "User registered successfully",
  TOKEN_REFRESHED: "Access token refreshed",

  // Validation & Errors
  BAD_REQUEST: "Invalid data provided",
  UNAUTHORIZED: "Unauthorized access",
  FORBIDDEN: "You do not have permission to perform this action",
  NOT_FOUND: "Resource not found",
  INTERNAL_ERROR: "An internal server error occurred",

  // User
  USER_NOT_FOUND: "User not found",
  USER_ALREADY_EXISTS: "User already exists",
  INVALID_CREDENTIALS: "Invalid email or password",

  // Product / Item
  PRODUCT_NOT_FOUND: "Product not found",
  PRODUCT_ADDED: "Product added successfully",
  PRODUCT_UPDATED: "Product updated successfully",

  // Payment
  PAYMENT_SUCCESS: "Payment completed successfully",
  PAYMENT_FAILED: "Payment failed",
  PAYMENT_PENDING: "Payment is pending confirmation",

  // Order
  ORDER_PLACED: "Order placed successfully",
  ORDER_CANCELLED: "Order cancelled successfully",
  ORDER_NOT_FOUND: "Order not found",
};

export const ERROR_TYPE = {
  VALIDATION: "ValidationError",
  AUTHENTICATION: "AuthenticationError",
  AUTHORIZATION: "AuthorizationError",
  DATABASE: "DatabaseError",
  NETWORK: "NetworkError",
  UNKNOWN: "UnknownError",
};
