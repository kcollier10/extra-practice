<!--1. How to find the missing number in a given integer array of 1 to 100? (solution)-->
var ninetyNineNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function findMissingNumber (numberArray) {
    if (numberArray[0] === 2) {
        return 1;
    }
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] !== numberArray[i + 1] - 1) {
            return numberArray[i] + 1;
        }
    }
}

console.log(findMissingNumber(ninetyNineNumbers));


<!--2. How to find the duplicate number on a given integer array? (solution)-->

<!--3. How to find the largest and smallest number in an unsorted integer array? (solution)-->

<!--4. How to find all pairs of integer array whose sum is equal to a given number? (solution)-->

<!--5. How to find duplicate numbers in an array if it contains multiple duplicates? (solution)-->

<!--6. How to remove duplicates from a given array in Java? (solution)-->

<!--7. How to sort an integer array in place using QuickSort algorithm? (solution)-->

<!--8. How to remove duplicates from an array in place? (solution)-->

<!--9. How to reverse an array in place in Java? (solution)-->

<!--10. How to find multiple missing numbers in given integer array with duplicates? (solution)-->

// <!--Read more: https://www.java67.com/2018/05/top-75-programming-interview-questions-answers.html#ixzz6bX7wHRKM-->

// 12. How to check if two Strings are anagrams of each other?

// 2 parameters to get the strings I want to check
// anagram is string with same letters in diff order to make diff words

function isAnagram (str1, str2) {
    str1.trim();
    str2.trim();
    // if (str1.length !== str2.length) {
    //     return false;
    // }
    //
    let charArray1 = str1.split("").sort().join("");
    let charArray2 = str2.split("").sort().join("");

    return charArray1 === charArray2;

}

console.log(isAnagram("goat", "dragon"));
console.log(isAnagram("meal", "male"));

// Floyd Triangle

// 1
// 2 3
// 3 5 6
// 7 8 9 10

function floyd () {
    var count = 1;
    for (var i = 1; i <= 4; i++) {
        var extraSpace = "";
        for (var j = 1; j <= i; j++) {
            extraSpace += count + " ";
            count++;
        }
        console.log(extraSpace);
    }
}
floyd();

// inner loop is increasing outer loop
