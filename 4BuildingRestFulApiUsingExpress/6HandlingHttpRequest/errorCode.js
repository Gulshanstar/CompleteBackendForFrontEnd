// -----------------------------------------

// 2xx Success Codes
// These indicate that the request was successfully received, understood, and accepted.
// 200 OK: The request was successful, and the response contains the requested data.
// 201 Created: The request was successful, and a new resource was created (e.g., after a POST request).
// 202 Accepted: The request has been accepted for processing, but the processing is not complete yet.
// 204 No Content: The request was successful, but there’s no response body (e.g., after a DELETE request).

// ------------------------------------------

// 3xx Redirection Codes
// These indicate that further action is needed to complete the request.
// 301 Moved Permanently: The resource has been permanently moved to a new URL.
// 302 Found: The resource is temporarily available at a different URL.
// 304 Not Modified: The resource hasn’t changed since the last request (used with caching).

// -----------------------------------------

// 4xx Client Error Codes
// These indicate an error caused by the client (e.g., bad input or unauthorized access).
// 400 Bad Request: The server couldn’t understand the request due to invalid syntax or parameters.
// 401 Unauthorized: Authentication is required, or the provided credentials are invalid.
// 403 Forbidden: The client doesn’t have permission to access the resource.
// 404 Not Found: The requested resource couldn’t be found on the server.
// 405 Method Not Allowed: The HTTP method (e.g., GET, POST) isn’t supported for the resource.
// 409 Conflict: The request conflicts with the current state of the resource (e.g., duplicate data).
// 429 Too Many Requests: The client has sent too many requests in a given time frame (rate limiting).


// ------------------------------------

// 5xx Server Error Codes
// These indicate that the server failed to fulfill a valid request due to an internal issue.

// 500 Internal Server Error: A generic error indicating something went wrong on the server.
// 501 Not Implemented: The server doesn’t support the requested functionality.
// 502 Bad Gateway: The server, acting as a gateway, received an invalid response from an upstream server.
// 503 Service Unavailable: The server is temporarily unavailable (e.g., due to maintenance or overloading).
// 504 Gateway Timeout: The server, acting as a gateway, didn’t receive a timely response from an upstream server.