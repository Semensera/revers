const fs = require('fs');
const path = require('path');

function reverseWords(text) {
    let words = text.split(/(\s+)/);
    let newWords = words.map(function(word) {
        return word.split('').reverse().join('');
    });
    return newWords.join('');
}

function processFile(inputFile, outputFile) {
    fs.readFile(inputFile, 'utf8', function(err, data) {
        if (err) {
            console.log('Сталася помилка при читанні файлу');
            console.log(err);
            return;
        }

        let reversed = reverseWords(data);

        fs.writeFile(outputFile, reversed, 'utf8', function(err) {
            if (err) {
                console.log('Сталася помилка при записі файлу');
                console.log(err);
                return;
            }

            console.log('Файл був успішно записаний: ' + outputFile);
        });
    });
}

let inputFilePath = path.join(__dirname, 'input.txt');
let outputFilePath = path.join(__dirname, 'output.txt');

processFile(inputFilePath, outputFilePath);
