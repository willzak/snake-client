const net = require('net');
const stdin = process.stdin;
const {IP, PORT} = require('./constants');

stdin.setEncoding('utf8');
stdin.resume();

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server')
  });

  conn.on('connect', () => {
    conn.write("Name: HAN");
  });

  return conn;
}

module.exports = connect;