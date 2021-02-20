class HashTable {
  // want the array to be 53 indeces long (prime numb!)  
  constructor(size=53){
      this.keyMap = new Array(size);
    }
  

    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        
        //little confused about multiplying total by weird prime but I guess it will only be 0 the first time and every time after that we'll get a prim multiple
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
    
    set(key,value){
      //I guess the hash function returns the INDEX!!!
      let index = this._hash(key);
      
      //check if therre's anything at that index already - separate chaining here
      if(!this.keyMap[index]){
        //if it's impety at that index, set the value to be an empty array (that we'll fill later)
        this.keyMap[index] = [];
      }
      // EITHER WAY (whether the array exists at that index or we just created a new empty one) we will do this last step
      // we say: "at array[index], push on a new key value array"
      //if it's empty it will be first thing in the index array, if it exists already it will go at the end
      this.keyMap[index].push([key, value]);
    }
    get(key){
      // start by hashing the key again (translate what index it is at or SHOULD be at)
      let index = this._hash(key);

      //if there is something tat the index...
      if(this.keyMap[index]){
        //...then loop through the array at that index (since there could be more than one thing at each index (separate chaining))
        for(let i = 0; i < this.keyMap[index].length; i++){
          // if the key we are getting matches the first thing at the array during a loop...
          if(this.keyMap[index][i][0] === key) {
            //... then return the value!!!
            return this.keyMap[index][i][1]
          }
        }
      }
      //if it doesn't exist (aka if statement resolves to false) return undefined
      return undefined;
    }
    //almost identical to values, just the last three lines are different
    keys(){
      let keysArr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            //the only difference between keys() and values() are the next three lines
            if(!keysArr.includes(this.keyMap[i][j][0])){
              keysArr.push(this.keyMap[i][j][0])
            }
          }
        }
      }
      return keysArr;
    }
    values(){
      // empty array for values we'll eventually return
      let valuesArr = [];
      
      //loop over the keyMap array
      for(let i = 0; i < this.keyMap.length; i++){
        //for each index of that array THAT EXISTS - will skip empty ones...
        if(this.keyMap[i]){
          //loop through the array at that index!!! - again b//c we used separate chaining
          for(let j = 0; j < this.keyMap[i].length; j++){
            //if the value i(in the parentheses) is NOT already in values array...
            if(!valuesArr.includes(this.keyMap[i][j][1])){
              /// add it to end of array - we won't execute this if it already exists in the vlues
              valuesArr.push(this.keyMap[i][j][1])
            }
          }
        }
      }
      return valuesArr;
    }
  }
  
  let ht = new HashTable(17);
  ht.set("maroon","#800000")
  ht.set("yellow","#FFFF00")
  ht.set("olive","#808000")
  ht.set("salmon","#FA8072")
  ht.set("lightcoral","#F08080")
  ht.set("mediumvioletred","#C71585")
  ht.set("plum","#DDA0DD")
  ht.set("purple","#DDA0DD")
  ht.set("violet","#DDA0DD")
  
  
  ht.keys().forEach(function(key){
    console.log(ht.get(key));
  })