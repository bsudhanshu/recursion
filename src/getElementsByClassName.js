// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var result = [];
  if (document.body.className === className) {
  	result.push(document.body);
  }

  var collectMatchingNodes = function (node) {
    if (node.hasChildNodes()) {
      for (var i = 0; i < node.children.length; i++) {
        collectMatchingNodes(node.children[i]);
      }
    } else {
      if (node.classList.contains(className)) {
        result.push(node);
      }
    }
    return result;
  }
  return collectMatchingNodes(document.body);
};
