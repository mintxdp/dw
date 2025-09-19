import {Curl} from 'node-libcurl';
import fs from 'fs';

const curl = new Curl();

let Download_URL: string ="";
let downloaded_file_path: string ="/downloads/";
const writeStream = fs.createWriteStream(downloaded_file_path);
let downloadData : string;

curl.setOpt(Curl.option.URL,Download_URL);
curl.setOpt(Curl.option.FOLLOWLOCATION,true);

curl.on('data',(chunk:Buffer)=>{
    writeStream.write(chunk);
    return chunk.length;
});
curl.on('error',(error)=>{
    console.log(error);
})
curl.on('end',()=>{
    console.log('File Downloaded.');
})