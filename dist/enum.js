"use strict";
var direction;
(function (direction) {
    direction[direction["north"] = 0] = "north";
    direction[direction["south"] = 1] = "south";
    direction[direction["east"] = 2] = "east";
    direction[direction["west"] = 3] = "west";
})(direction || (direction = {}));
console.log(direction.north);
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["notFound"] = 404] = "notFound";
    statusCodes[statusCodes["success"] = 200] = "success";
    statusCodes[statusCodes["redirect"] = 300] = "redirect";
    statusCodes[statusCodes["serverError"] = 500] = "serverError";
})(statusCodes || (statusCodes = {}));
console.log(statusCodes.notFound);
