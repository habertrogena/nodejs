function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name) {
  await delayFn(1000);
  console.log(`Hello, ${name}!`);
}

delayedGreet('habert')