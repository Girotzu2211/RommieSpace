CREATE TABLE usuariosRS(
    user_id SERIAL not null,
    nombre VARCHAR(50),
    email VARCHAR(50),
    pwd VARCHAR(50),
    PRIMARY KEY (user_id)
);

INSERT INTO usuariosRS (user_id,nombre,email,pwd)VALUES(DEFAULT, 'sara','sara@gmial.com','12324');