var time = moment().format("hA");

//Get time from moment for timestamp at top of page
$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY"));
  $("#currentTime").text(moment().format("h:mm a"));
  formatColor();
});

//Format block colors based on hour
function formatColor() {
  $(".form-control").each(function () {
    var plannerTime = parseInt($(this).attr("id").split("text")[1]);
    time = parseInt(time);
    roundTime = Math.floor(time / 100) * 100; //rounds DOWN to nearest hundreds
    if (plannerTime < roundTime) {
      $(this).addClass("past");
    } else if (plannerTime > roundTime) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

//Save respective tasks input to local storage
var nineAmText = document.querySelector("#text900");
var nineAmSave = document.querySelector("#nineAmSave");
nineAmText.value = localStorage.getItem("nineAm");
nineAmSave.addEventListener("click", nineRecall);

var tenAmText = document.querySelector("#text1000");
var tenAmSave = document.querySelector("#tenAmSave");
tenAmText.value = localStorage.getItem("tenAm");
tenAmSave.addEventListener("click", tenRecall);

var elevenAmText = document.querySelector("#text1100");
var elevenAmSave = document.querySelector("#elevenAmSave");
elevenAmText.value = localStorage.getItem("elevenAm");
elevenAmSave.addEventListener("click", elevenRecall);

var twelvePmText = document.querySelector("#text1200");
var twelvePmSave = document.querySelector("#twelvePmSave");
twelvePmText.value = localStorage.getItem("twelvePm");
twelvePmSave.addEventListener("click", twelveRecall);

var onePmText = document.querySelector("#text1300");
var onePmSave = document.querySelector("#onePmSave");
onePmText.value = localStorage.getItem("onePm");
onePmSave.addEventListener("click", oneRecall);

var twoPmText = document.querySelector("#text1400");
var twoPmSave = document.querySelector("#twoPmSave");
twoPmText.value = localStorage.getItem("twoPm");
twoPmSave.addEventListener("click", twoRecall);

var threePmText = document.querySelector("#text1500");
var threePmSave = document.querySelector("#threePmSave");
threePmText.value = localStorage.getItem("threePm");
threePmSave.addEventListener("click", threeRecall);

var fourPmText = document.querySelector("#text1600");
var fourPmSave = document.querySelector("#fourPmSave");
fourPmText.value = localStorage.getItem("fourPm");
fourPmSave.addEventListener("click", fourRecall);

var fivePmText = document.querySelector("#text1700");
var fivePmSave = document.querySelector("#fivePmSave");
fivePmText.value = localStorage.getItem("fivePm");
fivePmSave.addEventListener("click", fiveRecall);

//Recall respective tasks from local storage
function nineRecall() {
  localStorage.setItem("nineAm", nineAmText.value);
}

function tenRecall() {
  localStorage.setItem("tenAm", tenAmText.value);
}

function elevenRecall() {
  localStorage.setItem("elevenAm", elevenAmText.value);
}

function twelveRecall() {
  localStorage.setItem("twelvePm", twelvePmText.value);
}

function oneRecall() {
  localStorage.setItem("onePm", onePmText.value);
}

function twoRecall() {
  localStorage.setItem("twoPm", twoPmText.value);
}

function threeRecall() {
  localStorage.setItem("threePm", threePmText.value);
}

function fourRecall() {
  localStorage.setItem("fourPm", fourPmText.value);
}

function fiveRecall() {
  localStorage.setItem("fivePm", fivePmText.value);
}
