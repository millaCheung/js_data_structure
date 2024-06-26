class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.value = data;
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            (!root.left) ? root.left = newNode: this.insertNode(root.left, newNode);
        } else {
            (!root.right) ? root.right = newNode: this.insertNode(root.right, newNode);
        }
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    removeNode(root, value) {
        if (!root) {
            return null;
        }
    }
}