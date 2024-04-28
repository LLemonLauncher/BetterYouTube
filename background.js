console.log("Roflkopter");
//import * as content_scripts from "./content_scripts.js";


if (localStorage.getItem('blockList') == null && localStorage.getItem('windowOpen') == null) {
  let list = new Array();
  localStorage.setItem('blockList', JSON.stringify(list));
  localStorage.setItem('windowOpen', false);
  console.log("Local storage created");
}


window.addEventListener('DOMContentLoaded', function() {

  //searchBlockTerms();
  var storedList = localStorage.getItem('blockList');
  if (storedList) {
    list = JSON.parse(storedList);
    showList();
  }
});

window.addEventListener('beforeunload', function() {
  localStorage.setItem('blockList', JSON.stringify(list));
  localStorage.setItem('windowOpen', false);
});

browser.contextMenus.create({
  id: "blocky",
  title: "Open Block Terminal",
  contexts: ["all"] // Contexts where the menu item will appear
});


browser.contextMenus.onClicked.addListener((info, tab) => {

  let windowOpen = JSON.parse(localStorage.getItem('windowOpen'));

  if (info.menuItemId === "blocky" && !windowOpen) {
    console.log("2Roflkopüter");
    localStorage.setItem('windowOpen', true);
    browser.windows.create({
      url: "block.html",
      type: "popup",
      width: 600,
      height: 400,
    })
  }
});


function showList() {

  list.sort();
  checkboxContainer.innerHTML = "";

  list.forEach((element, index) => {

    console.log(element + " " + index);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `checkbox${index}`;

    const label = document.createElement("label");
    label.htmlFor = `checkbox${index}`;
    label.appendChild(document.createTextNode(element));

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
  });
}

const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("submitButton");
const checkboxContainer = document.getElementById("checkbox-container");

submitButton.addEventListener("click", function() {

  if (userInput.value !== "" && list.indexOf(userInput.value) === -1) {
    list.push(userInput.value.trim().toLowerCase());
    showList();
    return;
  }

  let checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      console.log("Checkbox checked: " + "checkbox.value");
      list.splice(list.indexOf(checkbox.nextElementSibling.textContent), 1)
    }
  });
  showList();
  searchBlockTerms();

})

function searchBlockTerms() {

  console.log("searchBlockTerms is being executed");

  //const videoTitles = document.querySelectorAll('.ry-badge ry-badge-dark');

  const videoTitles = [...document.querySelectorAll('#video-title.style-scope.ytd-rich-grid-media')].map(x => x.innerText);

  //const videoTitles = document.getElementById('video-title');

  //const videoTitles = document.querySelectorAll('yt-logo-updated-svg_yt2');
  console.log(videoTitles);

  videoTitles.forEach(titleElement => {
    const titleText = titleElement.textContent.toLowerCase(); // Get the lowercase text content of the title
    const foundWords = list.filter(word => titleText.includes(word.toLowerCase()));

    if (foundWords.length > 0) {
      console.log(`Title: ${titleText}`);
      console.log(`Found words: ${foundWords.join(", ")}`);
    } else {
      console.log("No words found, sadge :(");
    }
  });
}












