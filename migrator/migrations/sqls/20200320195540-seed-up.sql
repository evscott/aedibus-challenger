CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE challenge_state AS ENUM ('pending', 'running', 'complete');

CREATE TABLE IF NOT EXISTS Users (
    id uuid DEFAULT uuid_generate_v1() UNIQUE,
    email varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Challenges (
    id uuid DEFAULT uuid_generate_v1() UNIQUE,
    creator_id uuid REFERENCES Users(id) NOT NULL,
    challenger_id uuid REFERENCES Users(id) NOT NULL,
    state challenge_state NOT NULL DEFAULT 'pending',
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Tests (
    challenge_id uuid REFERENCES Challenges(id) NOT NULL,
    name varchar(255) NOT NULL,
    time decimal,
    message varchar(255),
    failure boolean DEFAULT false,
    PRIMARY KEY (challenge_id, name)
);