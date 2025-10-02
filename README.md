# To-Do List Web App

A simple web application to manage your tasks efficiently. Users can add new items, delete items, and mark items as completed (strike-through).

## Features

* **Add New Item:** Easily add tasks to your to-do list.
* **Delete Item:** Remove tasks you no longer need.
* **Strike Item:** Mark tasks as completed with a strike-through effect.
* **Persistent Storage:** Uses PostgreSQL to store your tasks.

## Tech Stack

* **Backend:** Node.js, Express
* **Database:** PostgreSQL
* **Frontend:** Any frontend framework (can use React, plain HTML/JS, etc.)
* **API Calls:** Axios / Fetch

## API Endpoints

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/getList`        | Get all to-do items |
| POST   | `/addNewItem`     | Add a new task      |
| DELETE | `/deleteItem/:id` | Delete a task by ID |

## Environment Variables

Create a `.env` file in the backend root directory:

```env
DB_USER=postgres
DB_HOST=localhost
DB_PASSWORD=1234
DB_DATABASE=list
DB_PORT=5432
BACKEND_PORT=3000
BACKEND_URL=http://localhost:3000
```

## How to Run

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start PostgreSQL and create the database `list` with table `ToDoList` (id SERIAL PRIMARY KEY, note TEXT).
4. Run the server:

   ```bash
   node index.js
   ```

   or with nodemon:

   ```bash
   nodemon index.js
   ```
5. Open frontend and start managing your tasks.

