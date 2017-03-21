// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === "number" || typeof obj === "boolean") {
    return obj.toString();
  } else if (obj === null) {
	return "null";
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
  	  var result = [];
  	  if (obj.length === 0) {
  	  return "[]";
  	  }
  	  obj.forEach(function(ele){
        result.push(stringifyJSON(ele));
  	  });
    return '[' + result + ']';
  } else if (typeof obj === "object") {
      var result = [];
      for (var key in obj) {
      	if (typeof obj[key] === "undefined" || typeof obj[key] === "function") {
        return "{}";
        }
        result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    return "{" + result + "}";
  }

};
