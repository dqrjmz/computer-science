

## 二进制堆实现优先队列

* 主要操作是`下沉和上浮`来维护二进制堆的特性；
* 二进制堆是一种存储在数组中的特殊的二叉树类型；（完全二叉树）
* 数组的第一个数为空；
* 堆顶 堆底；
* arr[1]为根节点；

* 二进制堆分为最大堆，最小堆；

## 两个主要应用

* 堆排序；
* 优先队列；

## 优先队列

* 插入或者删除元素，元素都是自动排序，底层原理是二进制堆操作；
* 主要操作的上浮和下沉是为了维护堆的结构；


* 是否存在元素：         检查队列是否没有元素；
* 根据权重插入元素：      根据关联权重添加元素到队列中；
* 拉取最高权重的元素：    从队列移除有最高权重的元素，并且返回它；