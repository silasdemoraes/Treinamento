module.exports = {
    "type": "postgres",
    "host": process.env.DATABASE_HOST,
    "port": process.env.DATABASE_PORT,
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "logging": process.env.NODE_ENV === 'dev',
    "logger": "file",
    "entities": [
        "./src/main/**/models/*.ts"
    ],
    "migrations": [
        "./src/shared/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/shared/database/migrations"
    }
}
