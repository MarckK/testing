function requester(url, callbacks) {
xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(callbacks) {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // do something with the response
    callbacks['onSuccess']();
  }
};

xhr.open('GET', url, true);
xhr.send();
}
