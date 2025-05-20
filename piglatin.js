const input = process.argv.slice(2).join(' ');
//slice(2) removes the first two elements (node and the script path)
//join(' ') combines the remaining array elements into a single string with spaces in between

//function toPigLatin(word) {
  //const vowels = "aeiou";
  //const firstLetter = word[0].toLowerCase(); //first letter of the word
  //if (vowels.includes(firstLetter)) {
    //return word + "way"; //vowel
  //} else {
    //return word.slice(1) + firstLetter + "ay"; //consonant
  //}
//}

function toPigLatin(word) {
  const vowels = "aeiou";
  if (vowels.includes(word[0].toLowerCase())) {
    return word + "way"; //vowel
  } else {
    return word.slice(1) + word[0] + "ay"; //consonant
  }
}

const words = input.split(' '); // splits the sentence into words
const pigLatinWords = words.map(toPigLatin); // converts each word to Pig Latin
console.log(pigLatinWords.join(' ')); // join and print the result