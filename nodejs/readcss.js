const fs = require('fs');

fs.readFile('style.css', 'UTF8', (error, file) => {
  const data = file;
  count(data);
});

function count(data) {
  let result = data.match(/#/g);
  let count = result.length;
  console.log('CSS innehåller', count, 'antal id:n');
}