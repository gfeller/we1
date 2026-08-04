import {increment, incrementLong, incrementLongAsync, getCounter} from './api.js'

function render() {
  document.getElementById("value").textContent = getCounter();  
}
 
document.getElementById("btn-inc").addEventListener("click", () => {
    increment();
    render();
});
document.getElementById("btn-inc-long").addEventListener("click", () => {
    incrementLong();
    render();
});
document.getElementById("btn-inc-long-async").addEventListener("click", () => {
    incrementLongAsync(render);
});
