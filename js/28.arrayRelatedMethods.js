// shift(), unshift(), splice(pos, noe, ele1, ele2..), splice
// sort(), reverse()
// pop & shift "element remove korbe "por: last element remove korbe, shift: first Element remove korbe" "

// var names = ['jorina', 'sokhina', 'morjina'];
// console.table(names);

// //push element add kore array er sheshe.
// var names = ['jorina', 'sokhina', 'morjina'];

// names.push("shorif");
// console.table(names);

// //shift
// var names = ['jorina', 'sokhina', 'morjina'];

// names.shift();
// console.table(names);

// //unshift: element add kore array er prothom dike
// var names = ['jorina', 'sokhina', 'morjina'];

// names.unshift("kolpona");
// console.table(names);

// //splice

// var names = ['jorina', 'sokhina', 'morjina'];

// // names.splice(element-add-kora, last-element-remove-kora, "element-name", "element-name");
// names.splice(2, 0, "korim", "Rohim");
// console.table(names);

// //slice

// var names = ['jorina', 'sokhina', 'morjina'];

// // var newArray = names.slice(prothom-theke-1-ta-element-remove-korbe);
// var newArray = names.slice(1);

// console.table(newArray);

// //sort: alphabet akare array gulo shajiye nibe jemon a, b, c, d.....z
// var names = ['Abir', 'zahid', 'babul', 'ilias'];

// // var sortedNames = names.alphabet-akare-array-gulo-shajiye-nibe-jemon-a,-b,-c,-d-.....z();
// var sortedNames = names.sort();

// console.table(sortedNames);

//sort: alphabet er last theke shajiye nibe jemon z, y, x, w....a
var names = ["Abir", "Zahid", "Babul", "Ilias"];

var sortedNames = names.sort();
// var sortedNames = names.alphabet-er-last-theke-shajiye-nibe-jemon-z,-y,-x,-w....a();
var sortedNames = names.reverse();

console.table(sortedNames);

//Number sort:
var number = [20, 5, 25, 45, 1];

number.sort(function (a, b) {
  return a - b; // 1, 2, 3, ..... sort hobe
  // return b-a; // ........ 3, 2, 1 sort hobe
});

console.table(number);
