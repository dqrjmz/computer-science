/**
 * 双链表
 */

function DoublyLinkedList() {
    var Node = function (el) {
        this.el = el;
        this.next = null;
        this.prev = null;
    }
    var length = 0;
    var head = null;
    var tail = null;

    this.insert = function (pos, el) {
        if (pos >= 0 && pos <= length) {
            var node = new Node(el),
                current = head,
                previous,
                index = 0;
            // 从头部插入
            if (pos === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            }
            else if (pos === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function (pos) {
        if (pos > -1 && pos < length) {
            var current = head,
                previous,
                index = 0;
            if (pos === 0) {
                head = current.next;
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (pos === length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.el;
        } else {
            return null;
        }
    }
}