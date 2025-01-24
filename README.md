# api-endpoints

Building a simple REST API for user management.

# User Management API

## Setup
1. Clone the repository
2. Run `npm install`
3. Start the server: `node index.js`
4. API will be available at `http://localhost:3000`

## API Endpoints

### Get User by ID
- **URL**: `/api/users/:id`
- **Method**: `GET`
- **URL Params**: `id=[integer]`
- **Success Response**: 
  - Code: 200
  - Content: `{ id: 1, name: "John", email: "john@example.com" }`
- **Error Response**:
  - Code: 404
  - Content: `{ message: "User not found" }`

[Document your implemented endpoints here following the same format...]

### create a new user
- **URL**: `/api/users/`
- **Method**: `POST`
- **URL Params**: `id=[integer]`
- **Success Response**: 
  - Code: 201
  - Content: `{ name, email }`
- **Error Response**:
  - Code: 400
  - Content: `{ message: "Name and email required" }`

  ### update an existing user
  - **URL**: `/api/users/:id`
- **Method**: `PUT`
- **URL Params**: `id=[integer]`
- **Success Response**:
  - Code: 200
  - Content: `{ user created successfully }`
- **Error Response**:
  - Code: 404
  - Content: `{ message: "User not found" }`
  - Code: 400
  - Content: `{ message: "Atleast one field must be updated" }`

  ### delete a user
   - **URL**: `/api/users/:id`
- **Method**: `DELETE`
- **URL Params**: `id=[integer]`
- **Success Response**:
  - Code: 200
  - Content: `{ user deleted successfully }`
- **Error Response**:
  - Code: 404
  - Content: `{ message: "User not found" }`
  
## Error Handling
  - error
    - code: 404,
    - message: user not found
    - type: NotFoundError
    - details: The requested user with id 123456 does not exist
    - timestamp: 2025-01-24T15:30:00Z,
    - suggestedFix: Check the email or name again and try again
  
  - error: 2
    - code: 400
    - message: Bad Request
    - type: BadRequestError
    - details: Missing  field error
    - timestamp: 2025-01-24T15:30:00Z
    - suggestedFix: Include at least one field (email or name) in the request body
  


