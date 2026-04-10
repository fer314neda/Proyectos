# 🎵 Music API

Welcome to the Music API! This is a simple, public REST API for music metadata.

## 🚀 Base URL

All endpoints are available at:
`http://localhost:3000/api`

---

## 🎤 Artists

Retrieve all artists or a specific one by ID.

### Get all artists
`GET /api/artists`

### Get a single artist
`GET /api/artists/:id`

### Get albums by artist
`GET /api/artists/:id/albums`

### Get songs by artist
`GET /api/artists/:id/songs`

---

## 💿 Albums

Explore the collection of albums.

### Get all albums
`GET /api/albums`

### Get a single album
`GET /api/albums/:id`

### Get songs by album
`GET /api/albums/:id/songs`

---

## 🎵 Songs

Access individual track data.

### Get all songs
`GET /api/songs`

### Get a single song
`GET /api/songs/:id`

---

## 📄 Pagination

All list endpoints support pagination via query parameters:

| Param | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `page` | `int` | `1` | Page number |
| `size` | `int` | `5` | Number of results per page |

**Example response:**
```json
{
  "info": {
    "count": 10,
    "pages": 2,
    "next": "http://localhost:3000/api/songs?page=2&size=5",
    "prev": null
  },
  "results": [ ... ]
}
```

---

## 🛠️ Errors

Standard JSON error responses.

| Code | Message |
| :--- | :--- |
| `404` | Resource or endpoint not found |
| `500` | Internal server error |

---

## 💻 Tech Stack

- **Node.js** & **Express**
- In-memory data storage
- Standard REST architecture
