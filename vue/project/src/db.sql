#db.sql
set names utf8;
drop database if exists saiou;
create database saiou charset=utf8mb4;
use saiou;

create table imagelist(
    id int primary key auto_increment,
    img_url varchar(255),
    title   varchar(255)
);
insert into imagelist values(null,' http://127.0.0.1:3000/img/index/banner1.jpg ','office');
insert into imagelist values(null,' http://127.0.0.1:3000/img/index/banner2.jpg ','office');
insert into imagelist values(null,' http://127.0.0.1:3000/img/index/banner3.jpg ','office');
insert into imagelist values(null,' http://127.0.0.1:3000/img/index/banner4.jpg ','office');
CREATE TABLE recom(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),         #主标题
  price_old DECIMAL(10,2),    #旧价格
  price_new DECIMAL(10,2),    #新价格
  lname VARCHAR(32),          #商品名称
  stock int,                  #库存
  img_url varchar(255)        #图片路径
);

insert into recom values(null,'彩色牛皮沙发',5900,5400.00,'沙发',50,'http://127.0.0.1:3000/img/recommend/recommend01.jpg');
insert into recom values(null,'黑牛皮沙发',3800,3200,'沙发',60,'http://127.0.0.1:3000/img/recommend/recommend02.jpg');
insert into recom values(null,'电动餐桌',3600,3200,'餐桌',84,'http://127.0.0.1:3000/img/recommend/recommend03.jpg');
insert into recom values(null,'餐桌',3000,2600,'餐桌',65,'http://127.0.0.1:3000/img/recommend/recommend04.jpg');
insert into recom values(null,'书柜',2580,2180,'书柜',72,'http://127.0.0.1:3000/img/recommend/recommend05.jpg');
insert into recom values(null,'小洽谈桌',1780,1360,'小洽谈桌',64,'http://127.0.0.1:3000/img/recommend/recommend06.jpg');
insert into recom values(null,'1.8米直边班台',1800,1550,'1.8米直边班台',55,'http://127.0.0.1:3000/img/recommend/recommend07.jpg');
insert into recom values(null,'公寓床',2500,2160,'公寓床',50,'http://127.0.0.1:3000/img/recommend/recommend08.jpg');
insert into recom values(null,'公寓床',300,240,'公寓床',72,'http://127.0.0.1:3000/img/recommend/recommend09.jpg');
insert into recom values(null,'文件柜',450,380,'文件柜',58,'http://127.0.0.1:3000/img/recommend/recommend10.jpg');
insert into recom values(null,'更衣柜',430,360,'更衣柜',98,'http://127.0.0.1:3000/img/recommend/recommend11.jpg');


create table user(
    uid int primary key auto_increment,
    uname varchar(32),
    upwd varchar(32),
    email varchar(64),
    phone varchar(16),
    avatar varchar(256),
    user_name varchar(32),
    gender int(11)
);
insert into user values(null,'豆豆儿','123456','123456@qq.com','138123456789','http://127.0.0.1:3000/img/user/user01.jpg','林子',0);
insert into user values(null,'乔治','123456','223456@qq.com','138223456789','http://127.0.0.1:3000/img/user/user02.jpg','程晨',1);
insert into user values(null,'lingling','123456','223456@qq.com','138223456789','http://127.0.0.1:3000/img/user/user02.jpg','程晨',1);

create table cart(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uid INT(11),
  price DECIMAL(10,2),        #价格
  lname VARCHAR(32),          #商品名称
  img_url varchar(255),       #图片路径
  count INT(11)               #数量
);
insert into cart values(null,1,3200,'黑牛皮沙发','http://127.0.0.1:3000/img/recommend/recommend02.jpg',1);
insert into cart values(null,2,1360,'小洽谈桌','http://127.0.0.1:3000/img/recommend/recommend06.jpg',2);
