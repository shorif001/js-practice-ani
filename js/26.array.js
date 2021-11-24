// onek gulo variable mile jeta hoy sheta hosse array

// var name1, name2, name3, name4, name5;
// name1 = "Shorif";
// name2 = "Ahmed";
// name3 = "Rohim";
// name4 = "Korim";
// name5 = "Halim";
// // console.log(name5);

// var names = ['sokhina', 'jorina', 'morjina'];

// console.log(names.length);

// names.push("komola"); //array er vitore notun nam push korar jonno, last a add hobe
// names.pop(); // array er last value ta remove korar jonno. 2 ta pop use korle last theke 2 pa array value remove hobe

// console.log(names.length);
// console.log(names);
// console.log(names[2]);

// //array concatination

// var countryOne = ["Bangladesh", " USA,"];
// var countryTwo = ["Turky", " China"];

// // 2 vabe concatination kora jay
// // no. 1
// document.write(`This is 2 variable value = ${countryOne}  ${countryTwo}` );

// // 2 vabe concatination kora jay
// // no. 2
// var country = countryOne.concat(countryTwo);
// console.log(country);

const items = [
  { name: "shorif", price: 100 },
  { name: "rohim", price: 20 },
  { name: "korim", price: 52 },
  { name: "rofik", price: 40 },
  { name: "shofik", price: 60 },
  { name: "harun", price: 70 },
  { name: "borun", price: 80 },
  { name: "Morun", price: 90 },
];

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(filteredItems);
