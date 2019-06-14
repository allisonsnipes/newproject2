DROP DATABASE IF EXISTS missingDB;
CREATE DATABASE missingDB;
USE missingDB;

CREATE TABLE persons
(
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    date_missing datetime,
    organization VARCHAR(50) NOT NULL,
    country_origin VARCHAR(50) NOT NULL,
    is_found BOOLEAN NOT NULL,
    gender VARCHAR(10) NOT NULL,
    PRIMARY KEY(first_name)
);

    INSERT INTO persons
        (id, first_name, last_name, age, date_missing, organizations, country_origin, gender)
    VALUES
        (1, "Acquitte", "Kisembo", 28, "2003-06-26", "Agence France-Presse", "Congo", "male");

    INSERT INTO persons
        (id, first_name, last_name, age, date_missing, organizations, country_origin, gender)
    VALUES
        (2, "Yelena", "Petrova", 34, "2014-06-01", "Freelance", "Iraq", "female");

    INSERT INTO persons
        (id, first_name, last_name, age, date_missing, organizations, country_origin, gender)
    VALUES
        (3, "Alfredo", "Mota", 25, "2005-04-02", "Hermosillo Daily", "Mexico", "male");

    INSERT INTO persons
        (id, first_name, last_name, age, date_missing, organizations, country_origin, gender)
    VALUES
        (4, "Jin Woo", "Ham", 34, "2017-05-29", "Daily NK", "Mexico", "male");

    INSERT INTO persons
        (id, first_name, last_name, age, date_missing, organizations, country_origin, gender)
    VALUES
        (5, "JinWoo", "Hame", 67, "2017-05-29", "Daily NK", "Mexico", "male");
