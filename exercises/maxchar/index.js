// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {}
module.exports = maxChar;

function maxChar(str) {
  let [maxEl, maxKey, charMap] = ['', 0, {}];

  for(let el of str){
    !charMap[el] ? charMap[el] = 1 : charMap[el]++;
  }
  
  for(let key in charMap){
    if(charMap[key] > maxKey){
      maxEl = key;
      maxKey = charMap[maxKey]
    }
  }

  return maxEl;
}


// function maxChar(str) {
//   const character = {};
//   for (let char of str) {
//    if(!character[char]){
//      character[char] = 1
//    }else {
//      character[char] ++
//    }
//   }
//   let maxCharacter = "";
//   let max = 0
//   for(let key in character) {
//     if(character[key] > max) {
//       max = character[key]
//       maxCharacter = key
//     }
//   }
//   return maxCharacter
//  }

// function maxChar(str) {
//   const characters = {};
//   let max = 0;
//   let maxKey = "";
//  for (let char of str){
//   //  if(!characters[char]){
//   //   characters[char] = 1;
//   //  }else{
//   //   characters[char]++
//   //  }
//   !characters[char] ? characters[char] = 1 : characters[char]++;
//  }
//  for (let char in characters){
//   if(characters[char] > max){
//     max = characters[char];
//     maxKey = char;
//   }
//  }

//  return maxKey
// }

// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = "";

//   for (let char of str) {
//     !charMap[char] ? charMap[char] = 1 : charMap[char]++
//   }
//   for(let key in charMap) {
//     if(charMap[key] > max) {
//       maxChar = key;
//       charMap[key] = max;
//     }
//     return maxChar;
//   }
  
// }