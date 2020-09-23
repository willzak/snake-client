const { stdin } = require("process");
let connection;

const setupInput = function(conn) {
  console.log('entry');
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = () => {
    stdin.on('data', (data) => {
      switch (data) {
        case '\u0003': 
          process.exit();
          break;
        case 'w':
          connection.write('Move: up');
          break;
        case 'a':
          connection.write('Move: left');
          break;
        case 's':
          connection.write('Move: down');
          break;
        case 'd':
          connection.write('Move: right');
          break;
        case 't':
          connection.write('Say: yoo')
          break;
        default:
          console.log('Invaid input');
      }

    })
  };
  handleUserInput();

  return stdin;
};

module.exports = setupInput;