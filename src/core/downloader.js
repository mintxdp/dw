"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_libcurl_1 = require("node-libcurl");
const fs_1 = __importDefault(require("fs"));
const curl = new node_libcurl_1.Curl();
let Download_URL = "";
let downloaded_file_path = "/downloads/";
const writeStream = fs_1.default.createWriteStream(downloaded_file_path);
let downloadData;
curl.setOpt(node_libcurl_1.Curl.option.URL, Download_URL);
curl.setOpt(node_libcurl_1.Curl.option.FOLLOWLOCATION, true);
curl.on('data', (data) => {
    writeStream.write(data);
});
curl.on('error', (error) => {
    console.log(error);
});
curl.on('end', () => {
    console.log('File Downloaded.');
});
