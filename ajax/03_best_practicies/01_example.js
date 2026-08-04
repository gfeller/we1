// 1 await not required
async function getUser() {
  return await fetchUser();
}

function getUser() {
  return fetchUser();
}




// 2: missing return promise
doSomething()
  .then((url) => {
    fetch(url);
  }).then((result) => {
    // result ist undefined
  });



doSomething()
  .then((url) => fetch(url))
  .then((result) => {
    // result ist vorhanden
  });


// 3: nesting
fetch(…)
  .then(data => data.json().then( /**... */)  
);

fetch(…)
  .then(data => data.json())
  .then(res => /* … */);


// 4: Performance
const user = await getUser();
const orders = await getOrders();

const [user, orders] = await Promise.all([
  getUser(),
  getOrders(),
]);

// 5: async await
async function getUser() {
  const user = await fetchUser();
  return user;
}

// Weniger lesbar
fetchUser().then(user => {
  return user;
});


async function getUserByEmail(email){
  if (inMemoryCache[email]) {
    return inMemoryCache[email]; // returns from cache
  }
  const user = await loadUserByEmail(email); 
  inMemoryCache[email] = user;
  return user;
}