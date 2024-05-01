if (localStorage.getItem('blockList') == null) {
  let list = new Array();
  localStorage.setItem('blockList', JSON.stringify(list));
  console.log("Local storage created");
}

browser.runtime.onMessage.addListener(function(request, _sender, sendResponse) {

  if (request.message === "lol") {
    console.log("Roflkopüter");
    sendResponse(localStorage.getItem('blockList'));
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
});

browser.contextMenus.create({
  id: "blocky",
  title: "Open Block Terminal",
  contexts: ["all"] // Contexts where the menu item will appear
});

browser.contextMenus.onClicked.addListener((info, _tab) => {

  if (info.menuItemId === "blocky") {
    browser.windows.getAll().then((windows) => {
      let terminals = windows.filter((item) => item.title.includes("(BetterYouTube) - Block Terminal"));
      if (terminals.length != 0)
        return;
      browser.windows.create({
        url: "block.html",
        type: "popup",
        width: 600,
        height: 400,
      })
    });
  }
});

function showList() {

  list.sort();
  localStorage.setItem('blockList', JSON.stringify(list));
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





