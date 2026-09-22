// 42. Demonstrate callbacks, promises, and async/await

// Callback
function fetchDataCallback(callback) {
  setTimeout(() => callback("Data from callback"), 500);
}
fetchDataCallback(data => console.log(data));

// Promise
function fetchDataPromise() {
  return new Promise(resolve => setTimeout(() => resolve("Data from promise"), 500));
}
fetchDataPromise().then(data => console.log(data));

// async/await
async function fetchDataAsync() {
  const data = await fetchDataPromise();
  console.log("Data from async/await:", data);
}
fetchDataAsync();
