// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  
  var collectMatchingNodes = function (node) {
    var result = [];
    if (node.classList.contains(className)) {
        result.push(node);
    }

    if (node.hasChildNodes()) {
      for (var i = 0; i < node.children.length; i++) {
        result = result.concat(collectMatchingNodes(node.children[i]));
      }
    }

    return result;
  }

  return collectMatchingNodes(document.body);
};
