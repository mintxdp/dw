import {Curl} from 'node-libcurl';
const curl = new Curl();
curl.setOpt(Curl.option.URL,"https://jsonplaceholder.typicode.com/users/1")
curl.setOpt(Curl.option.FOLLOWLOCATION,true);

curl.on('data',(data)=>{
// console.log(data);
const buf = data.toString();
// console.log("Status: ",status,"Headers: ",headers)
// console.log(buf);
const headerJson = JSON.parse(buf);
console.log(headerJson);
})
curl.on('error',(error)=>{
    console.error(error);
})
curl.on('end',(status, headers,data)=>{
    console.log(status);
    console.log(headers);
    console.log(data);
})
curl.perform();