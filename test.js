//================================================================
// test.js
//
// Just a test file
//================================================================

const SHA1 = require("./SHA1.js");

function pass(value) {
    console.log("\n\x1b[32m\x1b[1m%s\x1b[0m", value);
}

function fail(value) {
    console.log("\n\x1b[31m\x1b[1m%s\x1b[0m", value);
}

let message = "Yeah I like coffee, how'd you know?";

let hh = SHA1(message);
let ans = "44792ad8239c9fd53bca3b929df625f834ae8341";

console.log("\nMessage:   " + message);
console.log("Hash:      " + hh);
console.log("Answer:    " + ans);
hh === ans ? pass("[ Passed ✔  ]") : fail("[ Failed ✘ ]");
