let counter = 0;

export function getCounter() {
  return counter;
}

export function increment() {
  counter += 1;  
}


export function incrementLong() {  
  const end = Date.now() + 3000;
  while (Date.now() < end) {
    // wait wait wait...
  }
  increment();
  
}

export function incrementLongAsync(callback) { 
  setTimeout(() => {
    increment();
    callback();
  }, 3000);
}