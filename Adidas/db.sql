#丢弃数据库，如果存在
DROP DATABASE IF EXISTS adidas;
#创建新的数据库
CREATE DATABASE adidas;
#进入数据库
USE adidas;
#创建新的数据表
CREATE TABLE user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  upwd  VARCHAR(32)
);
#插入数据
INSERT INTO user VALUES(null,'tom','123');
INSERT INTO user VALUES(null,'jerry','123');
