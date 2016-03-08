/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
/*globals _*/
"use strict";

function excercise1(array) {
    var totalsum = 0;
    array.forEach(function(value) {
        totalsum = totalsum + value;
    });
    return (totalsum / array.length);
}

function excercise2(array) {
    var max_val = array[0];
    array.forEach(function(value) {
        if (max_val < value) {
            max_val = value;
        }
    });
    return (max_val);
}

function excercise3(array) {
    for (var val = 0; val < array.length; val++) {
        if (array[val] % 2 === 0) {
            return true;
        }
    }
    return false;
}

function excercise4(array) {
    for (var val = 0; val < array.length; val++) {
        if (array[val] % 2 !== 0) {
            alert(val);
            return false;
        }
    }
    return true;
}

function arrayContains(strarray, word) {
    for (var val = 0; val < strarray.length; val++) {
        if (strarray[val].localeCompare(word) === 0) {
            return true;
        }
    }
    return false;
}

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

function excercise2underscore(array) {
    return _.max(array, function(num) {
        return num;
    });
}

function excercise3underscore(array) {
    return _.some(array, function(num) {
        return num % 2 === 0;
    });
}

function excercise4underscore(array) {
    return _.every(array, function(num) {
        return num % 2 === 0;
    });
}

var main = function() {
    document.getElementById("excercise2underscore").innerHTML = excercise2underscore([3, 35, 43, 97, 47, 69, 8]);
    document.getElementById("excercise3underscore").innerHTML = excercise3underscore([22, 32, 48, 54, 45, 77, 87]);
    document.getElementById("excercise4underscore").innerHTML = excercise4underscore([2, 32, 42, 52, 62, 72, 82]);
    document.getElementById("excercise1").innerHTML = excercise1([42, 63, 42, 75, 26, 87, 98]);
    document.getElementById("excercise2").innerHTML = excercise2([3, 35, 43, 97, 47, 69, 8]);
    document.getElementById("excercise3").innerHTML = excercise3([45, 77, 87, 22, 32, 48, 54]);
    document.getElementById("excercise4").innerHTML = excercise4([2, 32, 42, 52, 62, 72, 82]);
    document.getElementById("excercise5").innerHTML = arrayContains(["hello", "world", "good", "morning", "web", "hello", "development", "hello", "morning", "Programming", "morning"], "DEVELOPMENT");
    document.getElementById("excercise6a").innerHTML = arrayContainsTwo(["hello", "world", "good", "morning", "web", "hello", "development", "hello", "morning", "Programming", "morning"], "hello");
    document.getElementById("excercise6b").innerHTML = arrayContainsThree(["hello", "world", "good", "morning", "web", "morning", "development", "morning", "morning", "Programming", "morning"], "morning");
    document.getElementById("excercise6c").innerHTML = arrayContainsNTimes(["web", "world", "good", "web", "web", "hello", "development", "hello", "web", "Programming", "morning"], "web", 4);
};

$(document).ready(main);