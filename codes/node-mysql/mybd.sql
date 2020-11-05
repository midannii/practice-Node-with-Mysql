CREATE DATABASE midan;

use midan;

CREATE TABLE mylogs (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(100) NOT NULL,
  description text NOT NULL,
  dates DATETIME NOT NULL,
  PRIMARY KEY (id)
);

insert into mylogs (title, description, dates) values ('November 5th', '2 months left in 2020', NOW());
insert into mylogs (title, description, dates) values ('November 6th', 'I think winter is come in KOREA', NOW());
