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

// callback and higher order function

// function square(x) {
//   console.log(`this is square value ${x}: ${x * x}`);
// }

// // const y = square;
// //   y(5);

// function orderFunction(num, callback) {
//   callback(num);
// }

// orderFunction(7, square);

// // example
// const task1 = (callback) => {
//   console.log("This is Task1");
//   callback(); //ekta function run howar por onno ekta function call hobe
// };

// const task2 = (callback) => {
//   setTimeout(() => {
//     console.log("this is two");
//     callback(); //ekta function run howar por onno ekta function call hobe
//   }, 3000);
// };
// const task3 = (callback) => {
//   console.log("This is Task3");
//   callback(); //ekta function run howar por onno ekta function call hobe
// };
// const task4 = () => {
//   console.log("This is Task4");
// };

//ekta function run howar por onno ekta function call hobe
// task1(function f1(){
//   task2(function(){
//     task3(function f3(){
//       task4();
//     });
//   });
// });

//this is anonymous function ba nam sara function.
// task1(()=>{
//   task2(()=>{
//     task3(()=>{
//       task4();
//     });
//   });
// });

//promise

const promise1 = new Promise((resolve, reject) => {
  let completedPromise = true;
  if (completedPromise) {
    resolve("promise completed");
  } else {
    reject("Rejected");
  }
});

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//promise with setTimeout

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise completed setTimeout1");
  }, 2000);
});

// promise4.then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//promise with setTimeout
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed setTimeout2");
  }, 1000);
});

// promise5.then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   reject(err);
// })

//Promise.race 1 ti matro result niye kaj korbe j aage run hobe
Promise.race([promise4, promise5]).then((res) => console.log(res));

const promise2 = new Promise((resolve, reject) => {
  let promisComplete = true;
  if (promisComplete) {
    resolve("Completedddd");
  } else {
    reject("rejected");
  }
});

promise2
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    reject(err);
  });

const promise3 = new Promise((resolve, reject) => {
  let promiseT = true;

  if (promiseT) {
    resolve("This is resolve");
  } else {
    reject("this is reject");
  }
});

promise3
  .then((ddd) => {
    console.log(ddd);
  })
  .catch((error1) => {
    console.log(error1);
  });

//all promise show koranor jonno
Promise.all([promise1, promise2]).then((res) => console.log(res));

//onek gulo promise theke single promise show koranor jonno
Promise.all([promise1, promise2]).then(([res1, res2]) => console.log(res1));

//onek gulo promise ekshathe show koranor jonno
Promise.all([promise1, promise2, promise3]).then(([res1, res2, res3]) =>
  console.log(res1, res2, res3)
);
