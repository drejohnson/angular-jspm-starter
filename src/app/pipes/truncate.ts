import {Pipe} from 'ng-forward';

// Characters
@Pipe({
  name: 'characters'
})
class CharactersPipe() {
  return (input, chars, breakOnWord) => {
    if (isNaN(chars)) {return input};
    if (chars <= 0) {return ''};
    if (input && input.length > chars) {
      input = input.substring(0, chars);
      if (!breakOnWord) {
        const lastspace = input.lastIndexOf(' ');
        // get last space
        if (lastspace !== -1) {
          input = input.substr(0, lastspace);
        }
      } else {
        while (input.charAt(input.length - 1) === ' ') {
          input = input.substr(0, input.length - 1);
        }
      }
      return input + '…';
    }
    return input;
  };
};
// Split Characters
@Pipe({
  name: 'splitcharacters'
})
class SplitCharactersPipe() {
  return (input, chars) => {
    if (isNaN(chars)) {return input};
    if (chars <= 0) {return ''};
    if (input && input.length > chars) {
      const prefix = input.substring(0, chars / 2);
      const postfix = input.substring(input.length - chars / 2, input.length);
      return prefix + '...' + postfix;
    }
    return input;
  };
};
// Words
@Pipe({
  name: 'words'
})
class WordsPipe() {
  return (input, words) => {
    if (isNaN(words)) {return input};
    if (words <= 0) {return ''};
    if (input) {
      const inputWords = input.split(/\s+/);
      if (inputWords.length > words) {
        input = inputWords.slice(0, words).join(' ') + '…';
      }
    }
    return input;
  };
};
