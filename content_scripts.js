function searchBlockTerms() {

  console.log("searchBlockTerms is being executed");

  //const videoTitles = [...document.querySelectorAll('yt-formatted-string.style-scope.ytd-rich-grid-media')].map(x => x.innerText);

  const videoTitles = [...document.querySelectorAll('#video-title.style-scope.ytd-rich-grid-media')].map(x => x.innerText);

  //const videoTitles = document.querySelectorAll('#video-title.style-scope.ytd-rich-grid-media');
  console.log(videoTitles);

  browser.runtime.sendMessage({
    message : "lol"
  }).then((message) => {
    videoTitles.forEach(titleElement => {
      const titleText = titleElement.toLowerCase(); // Get the lowercase text content of the title
      
      console.log(message);
      const list = message ? JSON.parse(message) : [];

      const foundWords = list.filter(word => titleText.includes(word.toLowerCase()));
    
      if (foundWords.length > 0) {
        console.log(`Title: ${titleText}`);
        console.log(`Found words: ${foundWords.join(", ")}`);

        const notInterestedButton = document.querySelector('#button.style-scope.yt-icon-button');
        //const notInterestedOption = document.querySelector('paper-listbox.style-scope.ytd-menu-popup-renderer li:nth-child(2)');
        if (notInterestedButton) {
          notInterestedButton.click();

          console.log("Button clicked");
          } 
        }
        else {
          console.log("No Not Interested button found sadge :(");
        }
      
    });
  });
}

  setTimeout(function() {
    console.log("searchBlockTerms is being executed blankkkk");
    searchBlockTerms();
  }, 1000);

  

