CREATE DATABASE firstapi;

\l

\c firstapi;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(50),
    cellphone VARCHAR(10)
);

INSERT INTO users (fullname, lastname,email,cellphone)
    VALUES ('Juan','Pérez','juanp@acgeek.com','3214545654'),
    ('Carolina','Mejía','carome@acgeek.com','300545654');

