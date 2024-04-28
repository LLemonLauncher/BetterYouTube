function searchBlockTerms() {

  console.log("searchBlockTerms is being executed");

  const videoTitles = [...document.querySelectorAll('#video-title.style-scope.ytd-rich-grid-media')].map(x => x.innerText);

  //const videoTitles = document.getElementById('video-title');

  //const videoTitles = document.querySelectorAll('yt-logo-updated-svg_yt2');
  console.log(videoTitles);
  console.log(document);

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

searchBlockTerms();
