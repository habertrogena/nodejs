const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = " hello";
  }

  greet(name) {
    this.emit("greeting", `${this.greeting},${name}`);
  }
}

const myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on("greeting", (message) =>{
    console.log(`greeting event`,message);
});

myCustomEmitter.greet('Habert rogena')
