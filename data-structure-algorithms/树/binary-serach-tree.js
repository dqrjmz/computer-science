function BinarySearchTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    var root = null;

    /**
    *  插入新节点
    *   @param {Node} node 父级节点
        @param {Node} newNode 插入的新节点
    */
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    //插入数据
    this.insert = function (key) {
        var newNode = new Node(key);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    var inOrderTraverse = function (node, cb) {
        if (node !== null) {
            inOrderTraverse(node.left, cb);
            cb(node.key);
            inOrderTraverse(node.right, cb);
        }
    }

    // 中序遍历
    // 从左树中遍历，找到最小的开始
    this.inOrderTraverse = function (cb) {
        inOrderTraverse(root, cb);
    }

    var preOrderTraverse = function (node, cb) {
        if (node !== null) {
            cb(node.key);
            preOrderTraverse(node.left, cb);
            preOrderTraverse(node.right, cb);
        }
    }

    // 先序遍历
    // 从根节点开始，先访问左侧节点，在访问右侧节点
    this.preOrderTraverse = function (cb) {
        preOrderTraverse(root, cb);
    }

    var postOrderTraverse = function (node, cb) {
        if (node !== null) {
            postOrderTraverse(node.left, cb);
            postOrderTraverse(node.right, cb);
            cb(node.key);
        }
    }

    // 后序遍历
    // 从根节点开始首先遍历左树，然后遍历右树，最后是根节点
    this.postOrderTraverse = function (cb) {
        postOrderTraverse(root, cb);
    }

    /**
    搜索树中的值
    1. 最小值
    2. 最大值
    3、 搜索特定的值
    */
    var minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }
    this.min = function () {
        return minNode(root);
    }

    var maxNode = function (node) {
        if (node) {
            while (node && node.right != null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }
    this.max = function () {
        return maxNode(root);
    }

    var findNode = function (node, key) {
        if (node) {
            if (key < node.key) {
                return findNode(node.left, key);
            } else if (key > node.key) {
                return findNode(node.right, key);
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    this.find = function (key) {
        return findNode(root, key);
    }

    var findMinNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    }

    var removeNode = function (node, key) {
        if (node) {
            if (key < node.key) {
                node.left = removeNode(node.left, key);
                return node;
            } else if (key > node.key) {
                node.right = removeNode(node.right, key);
            } else {
                if (node.left === null && node.right === null) {
                    node = null;
                    return node;
                }

                if (node.left === null) {
                    node = node.right;
                    return node;
                }

                if (node.right === null) {
                    node = node.left;
                    return node;
                }

                var aux = findMinNode(node.right);
                node.key = aux.key;
                node.right = removeNode(node.right, aux.key);
                return node;
            }
        } else {
            return null;
        }
    }

    this.remove = function (key) {
        root = removeNode(root, key);
    }
}

var binTree = new BinarySearchTree();
binTree.insert(6);
binTree.insert(2);
binTree.insert(3);
binTree.insert(4);
binTree.insert(7);

function printNode(val) {
    console.log(val);
}
binTree.remove(6);
// binTree.inOrderTraverse(printNode);
// binTree.preOrderTraverse(printNode);
binTree.postOrderTraverse(printNode);