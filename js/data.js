function getData(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.open("get", `https://jsonplaceholder.typicode.com/${url}`);

  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      callback(JSON.parse(this.response));
    }
  };
}