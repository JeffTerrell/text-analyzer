$(document).ready(function() {
  const sample = "hello there ok green";
  let test = [];


  function wordCounter(apple) {
    test = apple.split(' ')
    let wordCount = 0;
    test.forEach(function(element) {
    wordCount += 1;
    });
    $("#result").text(wordCount);
  }
});  

wordCounter(sample);