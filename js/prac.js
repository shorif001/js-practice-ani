const t1 = () => {
  return new Promise((resolve, reject) => {
    resolve("kobitar nam t1");
  });
};

const t2 = () => {
  return new Promise((resolve, reject) => {
    resolve("Boi er nam t2");
  });
};

const t3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Class er nam t3");
    }, 2000);
  });
};

const t4 = () => {
  return new Promise((resolve, reject) => {
    resolve("Lekhoker nam t4");
  });
};

const t5 = () => {
  return new Promise((resolve, reject) => {
    resolve("Prokash Kal t5");
  });
};

const t6 = () => {
  return new Promise((resolve, rejece) => {
    resolve("This is resolve t6");
  });
};

t1()
  .then((res) => {
    console.log(res);
  })
  .then(t2)
  .then((res) => console.log(res))
  .then(t6)
  .then((res) => console.log(res))
  .then(t4)
  .then((res) => console.log(res))
  .then(t5)
  .then((res) => console.log(res))
  .then(t3)
  .then((res) => console.log(res));

// async

// const task1 = () => {
//   console.log("This is Task1");
// };

// const task2 = () => {
//   setTimeout(() => {
//     console.log("this is two");
//   }, 3000); //ei function run howar aagei onno function call hobe. ei func ta pore call hobe
// };
// const task3 = () => {
//   console.log("This is Task3");
// };
// const task4 = () => {
//   console.log("This is Task4");
// };

// task1();
// task2();
// task3();
// task4();

// // callback and higher order function

// function square(x) {
//   console.log(`this is square value ${x}: ${x * x}`);
// }

// // const y = square;
// //   y(5);

// function orderFunction(num, callback) {
//   callback(num);
// }

// orderFunction(7, square);
