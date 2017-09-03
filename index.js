function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const arr = document.querySelectorAll('.ranked-list');
  for(let i=0;i<arr.length;i++){
    arr[i].innerHTML = parseInt(arr[i]) + n;
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
