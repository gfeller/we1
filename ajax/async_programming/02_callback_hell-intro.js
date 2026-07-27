
// For these reasons, most modern asynchronous APIs don't use callbacks.
// Instead, the foundation of asynchronous programming in JavaScript is the Promise
function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}
