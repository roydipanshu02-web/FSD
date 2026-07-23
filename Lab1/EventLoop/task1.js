const f1 = () => {
  console.log("f1 start");
        f2();
        console.log("f1 running");
        console.log("f1 end");
};

const f2 = () => {
   console.log("f2 start");
        f3();
        console.log("f2 running");
        console.log("f2 end");
};

const f3 = () => {
  console.log("f3 start");
        console.log("f3 running");
        console.log("f3 stops");
};

function main() {
    console.log("Main starts");
    f1(); // synchronous Call
    console.log("Main running");
    console.log("Main ends");

}

main();
// javascript is synchronous and single threaded
// to overcome single time functiong we use Asynchronous Calling we use event loop to manage the call stack
// Asynchronpus calls using tomers
// 1 . set timeout
// 2. set immediate
// 3. process.next tick
// 4. set interval