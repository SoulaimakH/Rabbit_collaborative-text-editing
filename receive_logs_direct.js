#!/usr/bin/env node
const express = require('express');
const app = express()
var amqp = require('amqplib/callback_api');
const axios = require('axios').default;
var args = process.argv.slice(2);

if (args.length == 0) {
  console.log("Usage: receive_logs_direct.js [info] [warning] [error]");
  process.exit(1);
}

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var exchange = 'fanout';

    channel.assertExchange(exchange, 'fanout', {
      durable: false
    });

    channel.assertQueue('', {
      exclusive: true
      }, function(error2, q) {
        if (error2) {
          throw error2;
        }
      console.log(' [*] Waiting for logs. To exit press CTRL+C');

      args.forEach(function(severity) {
        channel.bindQueue(q.queue, exchange, severity);
      });

      channel.consume(q.queue, function(msg) {
        console.log(" [x] %s: '%s'", msg.fields.routingKey, msg.content.toString());
        axios.get("http://localhost:3000" + "?key=" + msg.fields.routingKey+"&pos="+msg.content.toString())
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })

       /* axios.post("http://localhost:3000", {
          key: 'key='+msg.fields.routingKey
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
*/

       /*var objReq = new XMLHttpRequest();
        objReq.open("GET", "http://localhost:3000/reciva" + "?key=" + msg.fields.routingKey+"?pos="+msg.content.toString(), false);
        objReq.send();*/
      }, {
        noAck: true
      });
    });
  });
});

