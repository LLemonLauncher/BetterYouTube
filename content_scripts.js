function searchBlockTerms() {

  console.log("searchBlockTerms is being executed");

    const videoTitles = document.querySelectorAll("#video-title");
  
    videoTitles.forEach(titleElement => {
      const titleText = titleElement.textContent.toLowerCase(); // Get the lowercase text content of the title
  
      // Check if any of the words from the "list" array are present in the title
      const foundWords = list.filter(word => titleText.includes(word.toLowerCase()));
  
      // If any word is found in the title, log the title and the found words
      if (foundWords.length > 0) {
        console.log(`Title: ${titleText}`);
        console.log(`Found words: ${foundWords.join(", ")}`);
      } else{
        console.log("no words found sadge :(");
      }
    });
  }