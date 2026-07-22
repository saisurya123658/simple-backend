const db = require("../database/database");

const getAll = () => {
    return db.prepare("SELECT * FROM tasks").all();
};

const getById = (id) => {
    return db.prepare("SELECT * FROM tasks WHERE id = ?").get(id);
};

const create = (title) => {
    return db.prepare(
        "INSERT INTO tasks(title, done) VALUES (?, ?)"
    ).run(title, 0);
};

const update = (id, title, done) => {
    return db.prepare(
        "UPDATE tasks SET title = ?, done = ? WHERE id = ?"
    ).run(title, done ? 1 : 0, id);
};

const remove = (id) => {
    return db.prepare(
        "DELETE FROM tasks WHERE id = ?"
    ).run(id);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
