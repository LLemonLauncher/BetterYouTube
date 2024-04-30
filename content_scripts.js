


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
  
        console.log(list);
  
        const foundWords = list.filter(word => titleText.includes(word.toLowerCase()));
      
        if (foundWords.length > 0) {
          console.log(`Title: ${titleText}`);
          console.log(`Found words: ${foundWords.join(", ")}`);

          const videos = document.querySelectorAll('video');
          console.log(videos);
          videos.forEach(video => {
          // Delete the video element
           video.remove();
          });

        } else {
          console.log("No words found, sadge :(");
        }
      });
    })
  
    
  }


  setTimeout(function() {
    console.log("searchBlockTerms is being executed blankkkk");
    searchBlockTerms();
  }, 600);

  

