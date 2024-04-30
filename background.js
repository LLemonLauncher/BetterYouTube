 console.log("Roflkopter");

 
 if (localStorage.getItem('blockList') == null && localStorage.getItem('windowOpen') == null) {
    let list = new Array();
    localStorage.setItem('blockList', JSON.stringify(list));
    localStorage.setItem('windowOpen', false);
    console.log("Local storage created");
 }
 
 browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  if (request.message === "lol") {
    console.log("Roflkopüter");
    sendResponse(localStorage.getItem('blockList') );
  }

 })
 
  
window.addEventListener('DOMContentLoaded', function() {
  
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
 
})





