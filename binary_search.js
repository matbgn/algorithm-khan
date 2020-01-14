/* Returns either the index of the location in the array,
or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
  // 1. Let min = 0 and max = n-1.
	var min = 0;
	var max = array.length - 1;
  var guess;
  var counter = 1;
  
  // 2. If max < min, then stop: target is not present in array. Return -1.
  // 7. Go back to step 2.
  while (max >= min) {
    // 3. Compute guess as the average of max and min, rounded down (so that it is an integer).
    guess = Math.floor((min + max) / 2);
    println(guess);

    // 4. If array[guess] equals target, then stop. You found it! Return guess.
    if (array[guess] === targetValue) { 
        println(counter);
        return guess; 
    }

    // 5. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
    // 6. Otherwise, the guess was too high. Set max = guess - 1.
    if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
    
    counter++;
  }

  return -1;

};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 3), 1);
Program.assertEqual(doSearch(primes, 97), primes.length-1);