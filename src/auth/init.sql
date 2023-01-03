create USER 'auth_user'@'localhost' IDENTIFIED BY 'Auth123';
create DATABASE auth;

grant all privileges on auth.* to 'auth_user'@'localhost';

USE auth;

create table user (
    id INT not null AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) not null unique,
    password VARCHAR(255) not null
);

insert INTO user (email, password) values ('saadrehman2000@gmail.com', 'rehman123')
