## Api Contact List

### Overview

This is a simple project in Node.js that uses the Express framework to create a RESTful API for contact management. The API allows adding, listing, and deleting contacts. Contact data is stored in a local text file.


### Prerequisites
- Node.js (12+)
- npm

### Endpoints
### Create Contact
- URL: /contact
- Method: `POST`
- Body Parameters: name (string, minimum 2 characters)

### List Contacts
URL: /contacts
Method: `GET`

### Delete Contact
- URL: /contact
- Method: `DELETE`
- Query Parameters: name (string)

### Project Structure
- `index.ts`: Starts the server and configures middlewares.
- `routes/index.ts`: Defines routes and handlers.
- `services/contact.ts`: Manages contacts (reading and writing to list.txt).

## Dependencies

- **express**: Web framework for Node.js.
- **helmet**: Security middleware for Express.
- **typescript**: Superset of JavaScript that adds static typing.
- **tsx**: Tool for running TypeScript files without the need for manual compilation.