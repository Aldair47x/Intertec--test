

function wordParser(word) {
  
  if(word.trim().length < 0) return;
  var newWord = word.split(' ')
  var ultimateWord = []
  newWord.forEach(w => {
    var nonAlphanumeric = w.split(/[^a-z0-9]/gi);
    if(nonAlphanumeric.length > 1){
      const uniqueStr = w.substring(1, w.search(/[^a-z0-9]/gi) - 1);
      const unique = uniqueStr.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('').length;
      const finalWord = w[0] + unique + w.substring(w.search(/[^a-z0-9]/gi) - 1, w.length);
      ultimateWord.push(finalWord);
    } else {
      const uniqueStr = w.substring(1, w.length -1);
      const unique = uniqueStr.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('').length;
      if(unique === 0){
        ultimateWord.push(w);
      } else {
        const finalWord = w[0] + unique + w[w.length -1];
        ultimateWord.push(finalWord);
      }
    }
  });

  return ultimateWord.join(' ');
}

var output = wordParser(
  "Creativity is thinking-up new things. Innovation is doing new things!"
);
console.log(output);
// expected: C6y is t4g-up n1w t4s. I6n is d3g n1w t4s!