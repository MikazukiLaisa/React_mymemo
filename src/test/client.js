const request = new XMLHttpRequest();

console.log("ok");
request.open("GET", "/", true);
request.onload = function (e) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      console.log(request.responseText);
    } else {
      console.error(request.statusText);
    }
  }
};
request.onerror = function (e) {
  console.error(request.statusText);
};
request.send(null);