-- ユーザーテーブル
CREATE TABLE users(
    id INT auto_increment primary key,
    username VARCHAR(255) not null,
    password VARCHAR(255) not null,
    `group` INT NOT NULL
);
-- ダミーデータ
INSERT INTO users(id,username,password,`group`)
VALUES
(1,'amuro','ray',1),
(2,'char','aznable',2);
-- select * from users;
+----+----------+----------+-------+
| id | username | password | group |
+----+----------+----------+-------+
|  1 | amuro    | ray      |     1 |
|  2 | char     | aznable  |     2 |
+----+----------+----------+-------+

