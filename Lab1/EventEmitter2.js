import { EventEmitter } from "node:events";

const sayHi = (name) => {
  console.log(`${name} logged in`);
};

const task = new EventEmitter();

task.once("greet" , () => {
    console.log("System started");
});

task.on("greet", sayHi);
task.on("greet", (name) => {
  console.log(`${name} starts working`);
});
task.on("greet" , (name) => { 
    console.log(`${name} Logged out`);
});

task.once("exit" , () => {
    console.log("System Shuting Down");
});


task.emit("greet", "Rahul Singh");
console.log();
task.off("greet" , sayHi);
task.emit("greet" , "Manish Sinha");
task.emit("greet" , "Mukesh Gupta");
console.log();
task.emit("exit" , "Rahul Singh"); //execute only once 
task.emit("exit" , "Manish Sinha"); // wont't affect
console.log("total listener" , task.listenerCount("greet"));
task.removeAllListeners("greet");


