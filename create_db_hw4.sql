/***********************************************************
* Create the database named hw4, its tables, and a database user
************************************************************/

DROP DATABASE IF EXISTS hw4;

CREATE DATABASE hw4;

USE hw4;

CREATE TABLE User (
  UserID INT NOT NULL AUTO_INCREMENT,
  Email VARCHAR(50),
  FirstName VARCHAR(50),
  LastName VARCHAR(50),
  Password VARCHAR(50),
  
  PRIMARY KEY(UserID) 
);

INSERT INTO User 
  (Email, FirstName, LastName, Password)
VALUES 
  ('jsmith@gmail.com', 'John', 'Smith', 'jsmith123'),
  ('mcarey@gmail.com', 'Mariah', 'Carey', 'mcarey123'),
  ('beyonce@gmail.com', 'Beyonce', 'Knowles', 'bknowles123'),
  ('bat@gmail.com', 'Bat', 'Man', 'bat123'),
  ('spider@gmail.com', 'Spider', 'Man', 'spider123'), 
  ('wwoman@gmail.com', 'Wonder', 'Woman', 'wonder123'), 
  ('super@gmail.com', 'Super', 'Man', 'super123');

