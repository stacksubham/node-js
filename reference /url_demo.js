const url = require('url');

const myurl = new URL('http:mywebsite.com:9000/hello.html?id=00&status=active');


//serialize url

console.log(myurl.href);
console.log(myurl.toString());

console.log(myurl.host);

console.log(myurl.hostname);

console.log(myurl.pathname);

console.log(myurl.search);

console.log(myurl.searchParams);

myurl.searchParams.append('abc', '123')
console.log(myurl.searchParams);
console.log(myurl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`)));