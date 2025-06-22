    {
    "info": {
        "name": "Movie-TV API Collection",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [
        {
        "name": "Get All Movies",
        "request": {
            "method": "GET",
            "header": [],
            "url": {
            "raw": "http://localhost:3000/api/movies",
            "protocol": "http",
            "host": ["localhost"],
            "port": "3000",
            "path": ["api", "movies"]
            }
        }
        },
        {
        "name": "Get Movie by ID",
        "request": {
            "method": "GET",
            "header": [],
            "url": {
            "raw": "http://localhost:3000/api/movies/1",
            "protocol": "http",
            "host": ["localhost"],
            "port": "3000",
            "path": ["api", "movies", "1"]
            }
        }
        },
        {
        "name": "Create Movie",
        "request": {
            "method": "POST",
            "header": [{ "key": "Content-Type", "value": "application/json" }],
            "body": {
            "mode": "raw",
            "raw": "{ \"title\": \"New Movie\", \"genre\": \"Action\", \"year\": 2025 }"
            },
            "url": {
            "raw": "http://localhost:3000/api/movies",
            "protocol": "http",
            "host": ["localhost"],
            "port": "3000",
            "path": ["api", "movies"]
            }
        }
        },
        {
        "name": "Update Movie",
        "request": {
            "method": "PUT",
            "header": [{ "key": "Content-Type", "value": "application/json" }],
            "body": {
            "mode": "raw",
            "raw": "{ \"title\": \"Updated Title\", \"genre\": \"Thriller\" }"
            },
            "url": {
            "raw": "http://localhost:3000/api/movies/1",
            "protocol": "http",
            "host": ["localhost"],
            "port": "3000",
            "path": ["api", "movies", "1"]
            }
        }
        },
        {
        "name": "Delete Movie",
        "request": {
            "method": "DELETE",
            "header": [],
            "url": {
            "raw": "http://localhost:3000/api/movies/1",
            "protocol": "http",
            "host": ["localhost"],
            "port": "3000",
            "path": ["api", "movies", "1"]
            }
        }
        },
        {
        "name": "Get All Shows",
        "request": {
            "method": "GET",
            "header": [],
            "url": {
            "raw": "http://localhost:3000/api/shows",
            "protocol": "http",
            "host": ["localhost"],
            "port": "3000",
            "path": ["api", "shows"]
            }
        }
        },
        {
        "name": "Get Show by ID",
        "request": {
            "method": "GET",
            "header": [],
            "url": {
            "raw": "http://localhost:3000/api/shows/1",
            "protocol": "http",
            "host": ["localhost"],
            "port": "3000",
            "path": ["api", "shows", "1"]
            }
        }
        },
        {
        "name": "Create Show",
        "request": {
            "method": "POST",
            "header": [{ "key": "Content-Type", "value": "application/json" }],
            "body": {
            "mode": "raw",
            "raw": "{ \"title\": \"New Show\", \"genre\": \"Mystery\", \"seasons\": 3 }"
            },
            "url": {
            "raw": "http://localhost:3000/api/shows",
            "protocol": "http",
            "host": ["localhost"],
            "port": "3000",
            "path": ["api", "shows"]
            }
        }
        },
        {
        "name": "Update Show",
        "request": {
            "method": "PUT",
            "header": [{ "key": "Content-Type", "value": "application/json" }],
            "body": {
            "mode": "raw",
            "raw": "{ \"title\": \"Updated Show\", \"seasons\": 5 }"
            },
            "url": {
            "raw": "http://localhost:3000/api/shows/1",
            "protocol": "http",
            "host": ["localhost"],
            "port": "3000",
            "path": ["api", "shows", "1"]
            }
        }
        },
        {
        "name": "Delete Show",
        "request": {
            "method": "DELETE",
            "header": [],
            "url": {
            "raw": "http://localhost:3000/api/shows/1",
            "protocol": "http",
            "host": ["localhost"],
            "port": "3000",
            "path": ["api", "shows", "1"]
            }
        }
        }
    ]
    }
