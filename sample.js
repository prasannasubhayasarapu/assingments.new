let promise = new Promise((resolve) => {
  resolve("Success!");
});

promise
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((result) => {
    console.log(result + " Again");
  });
