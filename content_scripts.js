function searchBlockTerms() {

  console.log("searchBlockTerms is being executed");

  const videoTitles = [...document.querySelectorAll('#video-title.style-scope.ytd-rich-grid-media')].map(x => x.innerText);
  //console.log(videoTitles);

  browser.runtime.sendMessage({
    message: "lol"
  }).then((message) => {
      let timer_index = 1;
      videoTitles.forEach((titleElement, index) => {
      const titleText = titleElement.toLowerCase();

      //console.log(message);
      const list = message ? JSON.parse(message) : [];

      const foundWords = list.filter(word => titleText.includes(word.toLowerCase()));
      const video_selector = "div#menu.style-scope.ytd-rich-grid-media>ytd-menu-renderer.style-scope.ytd-rich-grid-media>yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer";
      const menubutton_selector = "tp-yt-paper-item.style-scope.ytd-menu-service-item-renderer";

      if (foundWords.length > 0) {
        browser.runtime.sendMessage({
          message: "need indexes pls",
          data: index
        }).then((response) => {
          //console.log("response " + response);
          //response is boolean. Checks if video with given index has already been blocked to avoid double blocking
          if(response){
            console.log(`Title: ${titleText}`);
            console.log(`Found words: ${foundWords.join(", ")}`);
    
            setTimeout(() => {
              let video = document.querySelectorAll(video_selector);
              //console.log(video);
              video[index].children[0].click();
    
              //console.log("selected video menu");
              setTimeout(() => {
                document.querySelectorAll(menubutton_selector)[4].click();
    
                console.log("removed video");
              }, 400);
            }, 500 * (timer_index++));
          }
        });
      }
    });
  });
}


setInterval(() => {
  searchBlockTerms();
}, 5000);


window.addEventListener('beforeunload', function() {
  browser.runtime.sendMessage({
    message: "clear indexes"
  })
  }
)






