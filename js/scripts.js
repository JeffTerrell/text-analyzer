// Utility Logic

// function noInputtedWord(word, text) {
//   return ((text.trim().length === 0) || (word.trim().length === 0));
// }

function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}


// Business Logic

function wordCounter(text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});














// Sample code 1 from lesson *******

//   const sample = "hello there ok green";
//   let test = [];


//   function wordCounter(apple) {
//     test = apple.split(' ')
//     let wordCount = 0;
//     test.forEach(function(element) {
//     wordCount += 1;
//     });
//     $("#result").text(wordCount);
//   }
// });

// wordCounter(sample);



// Sample code 2 from lesson *******

// const text = "";

// function wordCounter(text) {
// 	const wordArray = text.split(' ');
//   let wordCount = 0;
//   wordArray.forEach(function(word) {
//   	if (word.length > 0) {
//     	wordCount ++;
//     }	else {
//     	return 0;
//     }
//   });
//   $("#result").text(wordCount);
// }

// wordCounter(text);



// Sample code 3 from lesson *******
// const text = "";

// function wordCounter(text) {
// 	if (text.trim().length === 0) {
//    	console.log(text.trim().length);
//     return 0;
//   }  
//   let wordCount = 0;
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(word) {
//   	wordCount ++;
//   });
//   console.log(wordCount);
//   /* $("#result").text(wordCount) */;
// }

// wordCounter(text);


// Sample code 4 from lesson Test 1*******
// const text = "hi there 77 19 in";

// function wordCounter(text) {
// 	if (text.trim().length === 0) {
//    	console.log(text.trim().length);
//     return 0;
//   }  
//   let wordCount = 0;
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(element) { 
//  		if (!Number(element)) {
//   		wordCount ++;
//     }
//   });
//   console.log(wordCount);
  /* $("#result").text(wordCount) */
// }

// wordCounter(text);



// Sample code 4 from lesson Test 2
// const text1 = "red blue red red red green";
// const word1 = "red"

// function numberOfOccurrencesInText(word, text) {
// 	const colorArrayOne = text.split(" ");
//   let counter = 0;
  
//   colorArrayOne.forEach(function(element) {
//     if (element === word) {
//       counter ++;
//     }
// 	});
//   console.log(counter);
//   return counter
// }

// console.log(numberOfOccurrencesInText(word1, text1));