
/**
 * Definition for a binary tree node.

 */

 /** 
* @param {number[]} preorder
* @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
var bstFromPreorder = function(preorder){

//create node to return (rootNode)
const root = new TreeNode(preorder[0])

//loop through preorder array
for (let i=1; i<preorder.length; i++){
    //Set the node insert
    const node = preorder[i];
    //traverse
    //root = 8 node = 5
    insert(root, node)

}
//Return the root
return root;

}

//Create a helper function to help us traverse the tree
const insert = (root, insertNode) => {
    //if the current node to inseret is less than the root node's value
    if (insertNode < root.val) {
        //if the left is already taken, traverse
        if (root.left) {
            insert(root.left, insertNode)
        }
        //else, store the current node in the left
        else(root.left = new TreeNode(insertNode))
    }
    else{
    //if the current node is greater than the root
    if (root.right){
    //traverse
    insert(root.right, insertNode)
    }
    
    //else, story the current node in the right
    else(
        root.right = new TreeNode(insertNode)
    )
    
 }
}
console.log(bstFromPreorder([8,5,1,7,10,12]))