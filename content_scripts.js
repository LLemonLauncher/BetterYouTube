function searchBlockTerms() {

  console.log("searchBlockTerms is being executed");

  //const videoTitles = [...document.querySelectorAll('yt-formatted-string.style-scope.ytd-rich-grid-media')].map(x => x.innerText);

  const videoTitles = [...document.querySelectorAll('#video-title.style-scope.ytd-rich-grid-media')].map(x => x.innerText);

  //const videoTitles = document.querySelectorAll('#video-title.style-scope.ytd-rich-grid-media');
  console.log(videoTitles);

  browser.runtime.sendMessage({
    message: "lol"
  }).then((message) => {
    let timer_index = 1;
    videoTitles.forEach((titleElement, index) => {
      const titleText = titleElement.toLowerCase(); // Get the lowercase text content of the title

      console.log(message);
      const list = message ? JSON.parse(message) : [];

      const foundWords = list.filter(word => titleText.includes(word.toLowerCase()));
      const video_selector = "div#menu.style-scope.ytd-rich-grid-media>ytd-menu-renderer.style-scope.ytd-rich-grid-media>yt-icon-button#button.dropdown-trigger.style-scope.ytd-menu-renderer";
      const menubutton_selector = "tp-yt-paper-item.style-scope.ytd-menu-service-item-renderer";

      if (foundWords.length > 0) {
        console.log(`Title: ${titleText}`);
        console.log(`Found words: ${foundWords.join(", ")}`);
        console.log(`Index: ${index} => Index / 2: ${index / 2}`);

        setTimeout(() => {
          let video = document.querySelectorAll(video_selector);
          console.log(video);
          // video[index / 2].children[0].click();

          console.log("selected video menu");
          setTimeout(() => {
            document.querySelectorAll(menubutton_selector)[4].click();
            console.log("removed video");
          }, 400);
        }, 500 * (timer_index++));
      }
    });
  });
}

setTimeout(function() {
  console.log("searchBlockTerms is being executed blankkkk");
  searchBlockTerms();
}, 1000);



