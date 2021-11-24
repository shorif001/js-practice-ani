// console.log("hi")

const task1 = () => {
  return new Promise((resolve, reject) => {
    resolve("Task 1 is completed");
  });
};

const task2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2 is completed");
    }, 2000);
  });
};

const task3 = () => {
  return new Promise((resolve, reject) => {
    resolve("Task 3 is completed");
  });
};

const task4 = () => {
  return new Promise((resolve, reject) => {
    resolve("Task 4 is completed");
  });
};

async function callAllTasks() {
  const t1 = await task1();
  console.log(t1);
  const t2 = await task2();
  console.log(t2);
  const t3 = await task3();
  console.log(t3);
  const t4 = await task4();
  console.log(t4);
}

callAllTasks();

// console.log("bye")

// nicher gulo diyew run kora jay

// task1()
// .then(res => console.log(res))
// .then(task2)
// .then(res => console.log(res))
// .then(task3)
// .then((res)=> console.log(res))
// .then(task4)
// .then((res)=> console.log(res))
