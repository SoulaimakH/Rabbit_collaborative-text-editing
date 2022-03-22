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
       /* const map1 = new Map();

        map1.set('a', 1);
        map1.set('b', 2);
        map1.set('c', 3);*/
        const uint8 = new Uint8Array([25, 36, 49]);

        var queue = 'hello';
        var msg = 'Hello World!';

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, amqp.Uint8Array);

        console.log(" [x] Sent");
    });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});