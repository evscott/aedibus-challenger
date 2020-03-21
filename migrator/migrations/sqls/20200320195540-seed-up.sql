CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS Users (
    id uuid DEFAULT uuid_generate_v1() UNIQUE,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Challenges (
    id uuid DEFAULT uuid_generate_v1() UNIQUE,
    creator_id uuid REFERENCES Users(id) NOT NULL,
    challenger_id uuid REFERENCES Users(id) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Challenge_Results (
    challenge_id uuid REFERENCES Challenges(id) NOT NULL,
    tests_ran integer not null,
    test_passed integer not null,
    PRIMARY KEY (challenge_id)
);