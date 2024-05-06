# BetterYouTube
A Firefox extension designed to filter unwanted content from YouTube. Also I have no Idea what I am doing, I just started learning JavaScript like two weeks ago lol.

How it works:

First, you right click anywhere on your browser and select "Open Block Terminal".
Inside the popup-window you can enter your keywords. The keywords will be remembered as they are stored within the local storage.
Now everytime you visit the YouTube homepage, videos with titles that contain at least one of your keywords will be marked as "not interested" automatically.
To remove a keyword, simply open the Block Terminal, tick the checkbox and hit "save" while the textbox is empty. You can remove multiple keywords at once.

For now, the funcion will be executed every 5 seconds. You can always undo the removal of a video manually. In that case the video won't be removed again unless you close or reload the tab.
If it seems like videos aren't being removed properly, you can try "clear indexes" inside the Block Terminal.
