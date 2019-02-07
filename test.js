//================================================================
// test.js
//
// Just a test file
//================================================================

const SHA1 = require("./SHA1.js");
const SHA256 = require("./SHA256.js");

function pass(value) {
    console.log("\n\x1b[32m\x1b[1m%s\x1b[0m", value);
}

function warn(value) {
    console.log("\n\x1b[33m\x1b[1m%s\x1b[0m", value);
}

function fail(value) {
    console.log("\n\x1b[31m\x1b[1m%s\x1b[0m", value);
}

let message = "tester";

let hh = SHA256(message);
let ans = "9bba5c53a0545e0c80184b946153c9f58387e3bd1d4ee35740f29ac2e718b019";

if (ans) {
	if (hh !== ans) {
	    console.log("\nMessage:   " + message);
	    console.log("Hash:      " + hh);
	    console.log("Answer:    " + ans);
	    fail("[ Failed ✘ ]");
	    return;
	}
    console.log("\nMessage:   " + message);
    console.log("Hash:      " + hh);
    console.log("Answer:    " + ans);
	pass("[ Passed ✔  ]");
	return;
}

warn("Hash: " + hh);
