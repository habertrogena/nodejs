const fs = require("fs");

function person(name, callbackfn) {
  console.log(`Hello, ${name}`);
  callbackfn();
}

function callbackfn() {
  console.log("my address is Embakasi");
}

person("habert", callbackfn);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("error reading file", err);
    return;
  } else {
    console.log(data);
  }
});
