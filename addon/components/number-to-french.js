import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string'; 
import layout from '../templates/components/number-to-french';

export default Component.extend({
  layout,

  number: 0,

  integerToWord: function(number) {
    let units, tens, scales, start, end, chunks,
        chunksLen, chunk, ints, i, word, words, wordsGroups;

    // Is number zero?
    if(parseInt(number) === 0) {
      return 'zéro';
    }

    // Array of units as words
    units = [
      '', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit',
      'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze',
      'seize', 'dix-sept', 'dix-huit', 'dix-neuf'
    ];

    // Array of tens as words
    tens = [
      '', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix',
      'quatre-vingt', 'quatre-vingt-dix'
    ];

    // Array of scales as words
    scales = [
      '', 'mille', 'million', 'milliard', 'billion', 'billiard',
      'trillion', 'trilliard', 'quadrillion', 'quadrilliard', 'quintillion',
      'quintilliard', 'sextillion', 'sextilliard', 'septillion',
      'septilliard', 'octillion', 'octilliard',
      'nonillion', 'nonilliard', 'décillion', 'décilliard',
      'quinquagintilliard'
    ];

    // Split user argument into 3 digit chunks from right to left
    start = number.length;
    chunks = [];
    while(start > 0) {
      end = start;
      chunks.push(number.slice((start = Math.max(0, start - 3)), end));
    }

    // Check if function has enough scale words to be able to stringify the user argument
    chunksLen = chunks.length;
    if(chunksLen > scales.length) {
      return '';
    }

    // Stringify each integer in each chunk

    wordsGroups = [];
    for(i = 0; i < chunksLen; i++) {
      words = [];
      chunk = parseInt(chunks[i]);
      if(chunk) {

        // Split chunk into array of individual integers
        ints = chunks[i].split( '' ).reverse().map(parseFloat);

        // If tens integer is 1, i.e. 10, then add 10 to units integer
        if(ints[1] === 1) {
          ints[0] += 10;
        }

        // If tens integer is 7 or 9, i.e. 92, then add 10 to units integer and remove 1 to tens integer
        if(ints[1] === 7 || ints[1] === 9) {
          ints[0] += 10;
          ints[1] -= 1;
        }

        // Add scale word if chunk is not zero and array item exists
        if((word = scales[i])) {
          if(ints[0] > 1 || ints[1] || ints[2]) {
            words.push(word + 's');
          }
          else {
            words.push(word);
          }
          words.push(' ');
        }

        // Add unit word if array item exists
        if((word = units[ints[0]]) && (!(scales[i] && ints[0] === 1) || i > 1)) {
          words.push(word);
        }

        // Add separator if
        if(ints[1] === 6 && ints[0] === 11) {
          words.push(' et ');
        }
        else if(ints[1] > 1 && ints[0] !== 1){
          words.push('-');
        }

        // Add tens word if array item exists
        if((word = tens[ints[1]])) {
          words.push(word);
        }

        // Add hundreds word if array item exists
        if((word = units[ints[2]])) {
          if(ints[0] || ints[1]) {
            words.push(' ');
            if (ints[2] === 1){
              words.push('cent');
            }
            else {
              words.push(word + ' cent');
            }
          }
          else if (ints[2] === 1){
            words.push('cent');
          }
          else {
            words.push(word + ' cents');
          }
        }
      }
      wordsGroups.push(words.reverse().join(''));
    }
    return wordsGroups.reverse().join(' ');
  },

  word: computed('number', function() {
    let fullNumber, integerNumber, decimalNumber, integerNumberInWords, decimalNumberInWords, word;
    if (this.decimal) {
      fullNumber = this.number.toString().split('.');
      integerNumber = fullNumber[0].toString();
      decimalNumber = fullNumber[1];
      integerNumberInWords = this.integerToWord(integerNumber);
      if (decimalNumber) {
        decimalNumber = decimalNumber.length === 0 ? decimalNumber + "0" : decimalNumber;
        decimalNumberInWords = this.integerToWord(decimalNumber);
      }
    } else {
      integerNumberInWords = this.integerToWord(this.number.toString());
    }

    switch (this.decimal) {
      case 'word':
        word = decimalNumberInWords ? `${integerNumberInWords} virgule ${decimalNumberInWords}` : integerNumberInWords;
        break;
      case 'fraction':
        if (decimalNumberInWords) {
          word = `${integerNumberInWords} et <sup>${decimalNumber}</sup>&frasl;<sub>${`1${"0".repeat(decimalNumber.length)}`}</sub>`;
        } else {
          word = integerNumberInWords;
        }
        break;
      default:
        word = integerNumberInWords;
    }
    if(this.capitalize) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return htmlSafe(word);
  })
});
