class Node{
    constructor(val,left =null,right=null){
        this.val = val;
        this.left= left;
        this.right=right;
    }
}
/* Pre order
function DFS_travesal(root){
    if(root === null) return [];
    let result = [];
    result.push(root.val);
     result.push(...DFS_travesal(root.left));
     result.push(...DFS_travesal(root.right));
    

     return result;
}
*/
/* In  order
function DFS_travesal(root){
    if(root === null) return [];
    let result = [];
    
     result.push(...DFS_travesal(root.left));
     result.push(root.val);
     result.push(...DFS_travesal(root.right));
     return result;
}
*/
// Post Order
function DFS_travesal(root){
    if(root === null) return [];
    let result = [];
  
     result.push(...DFS_travesal(root.left));
     result.push(...DFS_travesal(root.right));
      result.push(root.val);

     return result;
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(DFS_travesal(root));