## 概述

* 位是计算机中任何类型的二进制的东西，通常描述为0，1；

## 值

* 将存储器中的位，分成代表信息片段的块；在js环境中，这些块称为值；
* 每个值都有决定其作用的类型，

## 数字： 64位来存储单个数字值，表示负数时，最高位用来表示符号；

## 字符串

* unicode编码标准为每一个字符都分配一个数字；
* js为每个字符串元素使用16位来存储；所以可以存储多达2的16次方个不同的字；
* 但是unicode定义的字符是它的两倍多，所以，有些字符，实际占用了`两个字符的位置`；

## 自动类型转换

* js会尽可能接受几乎所有你给他的程序；
```
8*null = 0;             null => 0
"five" * 2 = NaN ;      "five" => NaN
```
* 真值：除了null,undefined之外的任何值；
* 对象类型的值与基本类型的值比较是，会掉调用toString，valueOf

## 运算符优先级

* 比较运算符，也叫布尔运算符

## 表达式和语句

* 我们把生产值的操作的代码片段称为`表达式`;
* 表达式就像从句，可以嵌套从句，语句就是完整的句子；

* 最简单的一条语句由一个表达式和其后的分号组成；
```
1;
1 :    是表达式
1; :   是语句
```
* 一个语句，它可以改变后面语句的状态，这个称为副作用；

## 绑定

* 产生的新值必须立即使用，否则会再度消失；所以js中提供了称为绑定或变量的东西；
```
let a = 5 * 5; 
这是第二种语句
```