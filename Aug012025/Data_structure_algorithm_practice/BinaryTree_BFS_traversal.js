class TreeNode{
    constructor(val,right =null,left=null){
        this.val = val;
        this.right= right;
        this.left = left;
    }
}
function BFS_traversal(root){
    if(!root){
        return;
    }
    let result = [];
    let queue = [root];
     
    while(queue.length){
        let len = queue.length;
       let temp = [];
        for(let i=0;i<len;i++){
            let node = queue.shift();
            temp.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
         result.push(temp);

    }
   return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left=right = new TreeNode(5);

console.log(BFS_traversal(root));