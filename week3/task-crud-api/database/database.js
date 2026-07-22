const Database = require("better-sqlite3");

// Create/Open SQLite Database
const db = new Database("tasks.db");

// Create tasks table if it doesn't exist
db.prepare(`
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        done INTEGER NOT NULL DEFAULT 0
    )
`).run();

// Check if table is empty
const count = db
    .prepare("SELECT COUNT(*) AS count FROM tasks")
    .get();

// Seed initial data only once
if (count.count === 0) {
    const insert = db.prepare(
        "INSERT INTO tasks (title, done) VALUES (?, ?)"
    );

    insert.run("Learn Node.js", 0);
    insert.run("Build Express API", 0);
    insert.run("Learn SQLite", 0);

    console.log("✅ Sample tasks inserted.");
}

console.log("✅ SQLite database connected.");

module.exports = db;
