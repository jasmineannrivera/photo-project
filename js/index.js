"use strict";
var quoteToken = "c42e314d8ea58df8c2658d9ed2d2add28d232cb2";

$(".test").click(function () {
    $(this).css("color", "coral");
});

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
}

$.ajax(settings).done(function (response) {
    const data = JSON.parse(response);
    console.log(data);
    console.log(data[0]);
    //1642 quotes available
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(0, 1642));