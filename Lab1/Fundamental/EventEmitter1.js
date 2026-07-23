import {EventEmitter} from "node:events";

const task=new EventEmitter();
const sayHi = (name)=>{
    console.log(`Loggedin ${name}`);
};


task.on('greet',sayHi)

task.on("greet",()=> {
    console.log("Logged Out");
});
task.once("greet",()=> {
    console.log("System started...");
});
//task.off('greet',()=> {
   // console.log(`System is shutting down`);
//});
task.emit('greet','Dipanshu Roy');
task.emit("greet","DIPANSHU");
task.emit("greet","Rahul");
task.emit("exit","Manager");
//task.off("greet","manager");