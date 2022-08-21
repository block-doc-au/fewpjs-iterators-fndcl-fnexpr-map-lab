const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // use the .map method on the tutorials to return a new array
  let newTutorials = tutorials.map(name => toTitleCase(name));
  return newTutorials
}

console.log(titleCased);

// function toTitleCase(name){
//   return (name.toUpperCase());
// };

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      //return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    }
  );
}

// const titleCased = tutorials.map(name => toTitleCase(name));
  

// console.log(titleCased);


// function toTitleCase(str) {
//     return str.replace(
//     /\w*/g,
//     function(txt) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     }
//   );
// }



