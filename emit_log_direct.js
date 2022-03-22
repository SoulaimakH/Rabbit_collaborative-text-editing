#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var exchange = 'fanout';
    var args = process.argv.slice(2);
    var msg = args.slice(1).join(' ') || '';
    var severity = (args.length > 0) ? args[0] : 'A';

    channel.assertExchange(exchange, 'fanout', {
      durable: false
    });
    channel.publish(exchange, severity, Buffer.from(msg));
    console.log(" [x] Sent %s: '%s'", severity, msg);
  });

  setTimeout(function() {
    connection.close();
    process.exit(0)
  }, 500);
});