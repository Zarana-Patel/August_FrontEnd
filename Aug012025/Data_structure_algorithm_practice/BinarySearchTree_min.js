class Node{
    constructor(val,left=null,right=null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
function find_min(root){
    if(root === null) return;
    let current = root;
    while(current.left !== null){
        current = current.left;
    }
    return current.val;
}

/*Recursive way* 
function findmin(root){
    if(!root) return;
    f(root.left) return root.value;

    return findmin(root.left);
}

*/

const root = new Node(8);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(6);

console.log(find_min(root));