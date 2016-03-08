/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
/*globals _*/
"use strict";

//Write a function that accepts an array of numbers as an argument and returns their average.
function excercise1(array) {
    var totalsum = 0;
    array.forEach(function(value) {
        totalsum = totalsum + value;
    });
    return (totalsum / array.length);
}
//Write a function that accepts an array of numbers as an argument and returns the largest number in the array.
function excercise2(array) {
    var max_val = array[0];
    array.forEach(function(value) {
        if (max_val < value) {
            max_val = value;
        }
    });
    return (max_val);
}
//Write a function that accepts an array of numbers and returns true if it contains at least one even number, false otherwise.
function excercise3(array) {
    for (var val = 0; val < array.length; val++) {
        if (array[val] % 2 === 0) {
            return true;
        }
    }
    return false;
}
//Write a function that accepts an array of numbers and returns true if every number is even, false otherwise.
function excercise4(array) {
    for (var val = 0; val < array.length; val++) {
        if (array[val] % 2 !== 0) {
            alert(val);
            return false;
        }
    }
    return true;
}
//Write a function that accepts two arguments—an array of strings and a string—and returns true if the string is contained in the array, false otherwise.
function arrayContains(strarray, word) {
    for (var val = 0; val < strarray.length; val++) {
        if (strarray[val].localeCompare(word) === 0) {
            return true;
        }
    }
    return false;
}
//Write a function that is similar to the previous one, but returns true only if the array contains the given string at least twice
function arrayContainsTwo(strarray, word) {
    var count = 0;
    for (var val = 0; val < strarray.length; val++) {
        if (strarray[val].localeCompare(word) === 0) {
            count += 1;
            if (count >= 2) {
                return (true);
            }
        }
    }
    return (false);
}
//Write a function that accepts three arguments and returns true if the array contains the element 3 times, where n is the third argument.
function arrayContainsThree(strarray, word) {
    var count = 0;
    for (var val = 0; val < strarray.length; val++) {
        if (strarray[val].localeCompare(word) === 0) {
            count += 1;
            if (count >= 3) {
                return (true);
            }
        }
    }
    return (false);
}
//Write a function that accepts three arguments and returns true if the array contains the element n times, where n is the third argument.
function arrayContainsNTimes(strarray, word, n) {
    var count = 0;
    for (var val = 0; val < strarray.length; val++) {
        if (strarray[val].localeCompare(word) === 0) {
            count += 1;
            if (count >= n) {
                return (true);
            }
        }
    }
    return (false);
}
//Write a function that accepts an array of numbers as an argument and returns the largest number in the array.
function excercise2underscore(array) {
    return _.max(array, function(num) {
        return num;
    });
}
//Write a function that accepts an array of numbers and returns true if it contains at least one even number, false otherwise.
function excercise3underscore(array) {
    return _.some(array, function(num) {
        return num % 2 === 0;
    });
}
////Write a function that accepts an array of numbers and returns true if every number is even, false otherwise.
function excercise4underscore(array) {
    return _.every(array, function(num) {
        return num % 2 === 0;
    });
}

var main = function() {
    document.getElementById("excercise1").innerHTML = excercise1([42, 63, 42, 75, 26, 87, 98]);
    document.getElementById("excercise2").innerHTML = excercise2([3, 35, 43, 97, 47, 69, 8]);
    document.getElementById("excercise3").innerHTML = excercise3([45, 77, 87, 22, 32, 48, 54]);
    document.getElementById("excercise4").innerHTML = excercise4([2, 32, 42, 52, 62, 72, 82]);
    document.getElementById("excercise5").innerHTML = arrayContains(["hello", "world", "good", "morning", "web", "hello", "development", "hello", "morning", "Programming", "morning"], "DEVELOPMENT");
    document.getElementById("excercise6a").innerHTML = arrayContainsTwo(["hello", "world", "good", "morning", "web", "hello", "development", "hello", "morning", "Programming", "morning"], "hello");
    document.getElementById("excercise6b").innerHTML = arrayContainsThree(["hello", "world", "good", "morning", "web", "morning", "development", "morning", "morning", "Programming", "morning"], "morning");
    document.getElementById("excercise6c").innerHTML = arrayContainsNTimes(["web", "world", "good", "web", "web", "hello", "development", "hello", "web", "Programming", "morning"], "web", 4);
    document.getElementById("excercise2underscore").innerHTML = excercise2underscore([3, 35, 43, 97, 47, 69, 8]);
    document.getElementById("excercise3underscore").innerHTML = excercise3underscore([22, 32, 48, 54, 45, 77, 87]);
    document.getElementById("excercise4underscore").innerHTML = excercise4underscore([2, 32, 42, 52, 62, 72, 82]);
};

document.addEventListener("DOMContentLoaded", function() {
    main();
});