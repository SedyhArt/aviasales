CREATE TABLE Users (
    id SERIAL UNIQUE,
    shared BIT,
    email VARCHAR(255)
);

-- код создания таблицы в БД