const inputEl = document.getElementById("input-el");
const btn = document.getElementById("btn");
const outputEl = document.getElementById("output-el");
var url = "https://api.funtranslations.com/translate/groot.json";

function createURL(text) {
  return url + "?text=" + text;
}

btn.addEventListener("click", function () {
  var inputText = inputEl.value;
  fetch(createURL(inputText))
    .then((response) => response.json())
    .then((json) => (outputEl.innerText = json.contents.translated));
});
