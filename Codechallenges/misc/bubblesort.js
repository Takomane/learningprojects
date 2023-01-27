// Write a JavaScript program that performs bubble sort on an array.
function bubbleSort(Array){
    for(var i = 0; i < Array.length; i++){
      for(var j = 0; j < ( Array.length - i -1 ); j++){
        if(Array[j] > Array[j+1]){
          var temp = Array[j]
          Array[j] = Array[j + 1]
          Array[j+1] = temp
        }
      }
    }
    console.log(Array);
   }