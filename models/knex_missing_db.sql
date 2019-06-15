DROP DATABASE IF EXISTS missingDB;
CREATE DATABASE missingDB;
USE missingDB;

CREATE TABLE persons
(
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10) NOT NULL,
    date_missing datetime,
    country_origin VARCHAR(50) NOT NULL,
    organizations VARCHAR(50) NOT NULL,
    PRIMARY KEY(first_name)
);

INSERT INTO persons
    (first_name, last_name, age, gender, date_missing, country_origin, organizations)
VALUES
    ("Acquitte", "Kisembo", 28, "male", "2003-06-26", "Congo", "Agence France-Presse");

INSERT INTO persons
    (first_name, last_name, age, gender, date_missing, country_origin, organizations)
VALUES
    ("Yelena", "Petrova", 34, "female", "2014-06-01", "Iraq", "Freelance");

INSERT INTO persons
    (first_name, last_name, age, gender, date_missing, country_origin, organizations)
VALUES
    ("Alfredo", "Mota", 25, "male", "2005-04-02", "Mexico", "Hermosillo Daily");

INSERT INTO persons
    (first_name, last_name, age, gender, date_missing, country_origin, organizations)
VALUES
    ("Jin Woo", "Ham", 34, "male", "2017-05-29", "China", "Daily NK");

INSERT INTO persons
    (first_name, last_name, age, gender, date_missing, country_origin, organizations)
VALUES
    ("Jane", "Smith", 55, "female", "2012-03-24", "Greece", "CNN");
