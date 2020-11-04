CREATE DATABASE midan;

use midan;

CREATE TABLE 'mydatabase' (
  'id' int(11) NOT NULL AUTO_INCREMENT,
  'title' varchar(100) NOT NULL,
  'description' text NOT NULL,
  'date' DATETIME NOT NULL,
  PRIMARY KEY (id)
);
