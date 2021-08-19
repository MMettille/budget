
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "bills" (
    "id" SERIAL PRIMARY KEY,
    "mortgage_rent" INT (100) DEFAULT 0,
    "car_loan" INT (100) DEFAULT 0,
    "furnace_loan" INT (100) DEFAULT 0,
    "prime_loan" INT (100) DEFAULT 0,
    "smaller_credit_card" INT (100) DEFAULT 0,
    "bigger_credit_card" INT (100) DEFAULT 0,
    "partner_credit_card" INT (100) DEFAULT 0,
    "groceries" INT (100) DEFAULT 0,
    "gas_car" INT (100) DEFAULT 0,
    "gas_home" INT (100) DEFAULT 0,
    "electric" INT (100) DEFAULT 0,
    "auto_home_insurance" INT (100) DEFAULT 0,
    "internet" INT (100) DEFAULT 0,
    "trash" INT (100) DEFAULT 0,
    "dog_food" INT (100) DEFAULT 0,
    "gym" INT (100) DEFAULT 0,
)