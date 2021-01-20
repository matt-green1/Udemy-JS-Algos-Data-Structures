// Given two strings, write a function to determine if the second string is an anagram of the first. (A word or phrase or name formed by rearranging the letters of another - ex: cinema and iceman)
// returns true or false
// All inputs lower case, single words, no numbers or spaces

function validAnagram(){
    // add whatever parameters you deem necessary - good luck!
    // so wee need all of the letters to match exactly between first and second strings
    
    /*
      Naive solution
      - Check that length mathches first. (if NOT - return False) If it does...
      - create variable copy for second string
      - Loop through first string -- and for each char, check if char exists in second string
          - If it does NOT, return False
          - If it DOES, remove that character from variable somehow (to take care of duplicates)
          - return true at end
       
          
      Better solution
      - Check that lengths match
      - Create empty Obj 1
      - Create empty Obj 2
      - Loop through str1 + str 2 and create a key for each letter (adding to it if it already exists)
      - Loop through obj 1
          - for each key:
              - See if key exists in obj2 - if not FALSE
              - If it does exist see if values match, if not FALSE
              else TRUE
    
    */
    
   function validAnagram(str1, str2){
    if(str1.length !== str2.length) {
        return false
    }
    
    // first we set up the two freqCounter Objects
    let freqCounter1 = {}
    let freqCounter2 = {}
    
    //Next we build them (count the number of times a character shows up in each string - 1 if it doesn't exist, +1 if it already exists)
    for(let char of str1) {
        freqCounter1[char] ? freqCounter1[char] += 1 : freqCounter1[char] = 1
    }
    
    for(let char of str2) {
        freqCounter2[char] ? freqCounter2[char] += 1 : freqCounter2[char] = 1
    }
    


    for(let key in freqCounter1) {
        // test if the chraracter in first string even exists in second string - if not, return false
        if (!(key in freqCounter2)) {
            return false
        }

        // check if frequency of char is same in both strings 
        if (freqCounter1[key] !== freqCounter2[key]){
            return false
        }
    }
    
    return true
  }