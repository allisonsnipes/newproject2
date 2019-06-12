DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
USE testdb;

CREATE TABLE missingP (
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

INSERT INTO missingP
  (first_name, last_name, age, date_missing, organization, country_origin, is_found, gender)
VALUES
  ("Acquitte", "Kisembo", 28, 06-26-2003, "Agence France-Presse", "Congo", "0", "male");

INSERT INTO missingP
(first_name, last_name, age, date_missing, organization, country_origin, is_found, gender)
VALUES
  ("Yelena", "Petrova", " ", 06-01-2014, "Freelance", "Iraq", "0", "female");