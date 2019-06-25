var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://github.com/andreii97/WikiProject/blob/master/jason.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();








