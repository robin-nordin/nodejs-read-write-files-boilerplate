const fs = require('fs');
const phrase = "You're a lizard, Harry";
const quote = "I can't be a Lizard";


fs.writeFile('Hogwarts.txt', phrase, 'utf8', (error, content) => {
    console.log(content);
});

fs.writeFile('quotes.txt', quote, 'utf8', (error) => {
    console.log('Quote saved!');
});

fs.readFile('index.html', 'utf8', (error, content) => {
    console.log(content);
});