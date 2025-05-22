# Quotes API

This is a simple Quotes API backend application built with Node.js and Express. It allows users to manage quotes through a RESTful API.

## Project Structure

```
quotes-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes
│   │   └── quotes.js         # Routes for handling quotes
│   ├── controllers
│   │   └── quotesController.js # Business logic for quotes
│   ├── models
│   │   └── quote.js          # Quote model definition
│   └── data
│       └── quotes.json       # Sample dataset of quotes
├── package.json               # npm configuration file
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd quotes-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- `GET /quotes` - Retrieve all quotes
- `GET /quotes/:id` - Retrieve a quote by ID
- `POST /quotes` - Create a new quote
- `PUT /quotes/:id` - Update a quote by ID
- `DELETE /quotes/:id` - Delete a quote by ID

## Example

### Get All Quotes
```
GET /quotes
```
Response:
```json
[
    {
        "id": 1,
        "author": "Author Name",
        "text": "Quote text",
        "category": "Category"
    }
]
```

### Create a Quote
```
POST /quotes
```
Request Body:
```json
{
    "author": "New Author",
    "text": "New quote text",
    "category": "New Category"
}
```
Response:
```json
{
    "id": 2,
    "author": "New Author",
    "text": "New quote text",
    "category": "New Category"
}
```

## License

This project is licensed under the MIT License.