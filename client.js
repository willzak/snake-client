const net = require('net');
const stdin = process.stdin;

stdin.setEncoding('utf8');
stdin.resume();

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
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