import Component from '@ember/component';
import {computed} from '@ember/object';
import {htmlSafe} from '@ember/string';
import layout from '../templates/components/number-to-lithuanian';

export default Component.extend({
  layout,

  number: 0,

  integerToWord: function (number) {
    let units, tens, scales, start, end, chunks,
      chunksLen, chunk, ints, i, word, words;

    // Is number zero?
    if (parseInt(number) === 0) {
      return 'nulis';
    }

    // Array of units as words
    units = [
      '', 'vienas', 'du', 'trys', 'keturi', 'penki', 'šeši', 'septyni', 'aštuoni',
      'devyni', 'dešimt', 'vienuolika', 'dvylika', 'trylika', 'keturiolika', 'penkiolika',
      'šešiolika', 'septyniolika', 'aštuoniolika', 'devyniolika'
    ];

    // Array of tens as words
    tens = [
      '', '', 'dvidešimt', 'trisdešimt', 'keturiasdešimt', 'penkiasdešimt', 'šešiasdešimt', 'septyniasdešimt',
      'aštuoniasdešimt', 'devyniasdešimt'
    ];

    // todo Add full words (singular/plural)
    // for example tūkst. -> tūkstantis, tūkstančiai, tūkstančių
    // mln. -> milijonas, milijonų, milijonai
    // same with mlrd. etc...

    // Array of scales as words
    scales = [
      '', 'tūkst.', 'mln.', 'mlrd.'
    ];

    // Split user argument into 3 digit chunks from right to left
    start = number.length;
    chunks = [];
    while (start > 0) {
      end = start;
      chunks.push(number.slice((start = Math.max(0, start - 3)), end));
    }

    // Check if function has enough scale words to be able to stringify the user argument
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
      return '';
    }

    // Stringify each integer in each chunk
    words = [];
    for (i = 0; i < chunksLen; i++) {
      chunk = parseInt(chunks[i]);
      if (chunk) {

        // Split chunk into array of individual integers
        ints = chunks[i].split('').reverse().map(parseFloat);

        // If tens integer is 1, i.e. 10, then add 10 to units integer
        if (ints[1] === 1) {
          ints[0] += 10;
        }

        // Add scale word if chunk is not zero and array item exists
        if ((word = scales[i])) { //todo
          words.push(word);
        }

        // Add unit word if array item exists
        if ((word = units[ints[0]])) {
          words.push(word);
        }

        // Add tens word if array item exists
        if ((word = tens[ints[1]])) {
          words.push(word);
        }

        // Add hundreds word if array item exists
        if ((word = units[ints[2]])) {
          if (ints[2] === 1) {
            words.push(word + ' šimtas');
          } else {
            words.push(word + ' šimtai');
          }
        }
      }
    }
    return words.reverse().join(' ');
  },

  word: computed('number', function () {
    let fullNumber, integerNumber, decimalNumber, integerNumberInWords,
      decimalNumberInWords, word;
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
        word = decimalNumberInWords ? `${integerNumberInWords} ir ${decimalNumberInWords}` : integerNumberInWords;
        break;
      case 'fraction':
        if (decimalNumberInWords) {
          word = `${integerNumberInWords} ir <sup>${decimalNumber}</sup>&frasl;<sub>${`1${"0".repeat(decimalNumber.length)}`}</sub>`;
        } else {
          word = integerNumberInWords;
        }
        break;
      default:
        word = integerNumberInWords;
    }
    if (this.capitalize) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return htmlSafe(word);
  })
});
