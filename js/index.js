'use strict';

// Функция которая принимает строку и возвращает количество слов в ней.

const example1 =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, laborum nobis, at hic praesentium quasi ut blanditiis quidem natus eius odio tempora explicabo laudantium sed, quas maiores. Similique, vero quis.';

function wordCount(example1) {
  const words = example1.split(' ');
  const spacesCheck = words.filter((word) => word !== ' ');
  return spacesCheck.length;
}

console.log(wordCount(example1));

// Функция, которая получает строку и возвращает размер самого большого слова в ней

const example2 = 'Loremghghghghghhghhghhghhghhghhghhgh ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, laborum nobis, at hic praesentium quasi ut blanditiis quidem natus eius odio tempora sdfsdfdfsdfsdfsdfsdfsdfsdfsdfsdfexplicabo laudantium sed, quas maiores. Similique, vero quis.';


function theBiggestWord(example) {
  const arrOfWords = example.split(' ');
  let longestWord = ' ';
  for (let i = 0; i < arrOfWords.length; i++) {
    if (longestWord.length < arrOfWords[i].length) {
      longestWord = arrOfWords[i];
    }
    return longestWord.length;
  }
}

console.log(theBiggestWord(example2));
