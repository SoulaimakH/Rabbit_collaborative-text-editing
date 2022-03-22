#!/usr/bin/env node
/*const { exec } = require('child_process');
//var keynum="r";
exec(`node emit_log_direct.js A ${keynum}`, (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
   // the *entire* stdout and stderr (buffered)
   console.log(`stdout: ${stdout}`);
   console.log(`stderr: ${stderr}`);
  }
});

*/
// var http = require("http");
// var sys = require('sys')
// var exec = require('child_process').exec;
// var url = require("url");

// function onRequest(request, response) {
//     var params = url.parse(request.url,true).query;
//     function puts(error, stdout, stderr) {sys.puts(stdout)}
//     exec("node emit_log_direct.js A" + params.keynum, puts);
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end('Wallpaper');
// }

// http.createServer(onRequest).listen(8080);

const express = require('express');
const { exec } = require('child_process');
const sys = require('sys');
const app = express()

app.get('', (req,res) => {
    console.log(req.query.key);
    exec("node emit_log_direct.js A " + req.query.key+"pos"+req.query.pos);
    res.send("Liste des parkings")
})

app.listen(8081, () => {
    console.log("Serveur à l'écoute")
})