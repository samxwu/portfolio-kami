---
layout: post
title: Bloc Jams
thumbnail-path: "img/blocJams_cover.png"
short-description: Bloc Jams is a digital music player for listening to your favorite jams.

---

{:.center}
![]({{ site.baseurl }}/img/blocJams_cover.png)

## Summary

Bloc Jams, a digital music player like Spotify, was the first project that I worked on at Bloc. With simplicity in mind, listeners can play, pause, skip, or rewind on a library of catchy jams via its' straightforward interface.  


## Problem & Solution

The goal of Bloc Jams was to provide students an immersive experience to learn programming fundamentals for Front-end web development. As a student, it was important to me that I learn the engines that was powering Bloc Jams - HTML5, CSS, jQuery, and JavaScript. Furthermore, I was tasked with adding code or refining existing code to improve Bloc Jams' functionality at various phases of the project lifecycle:

**1. Update the Player Bar with the current song's information when the listener switches from one song to the next.**

Solution: Wrote a function that dynamically updates the text of the `<h2>` tags that contain the song name and the artist name with reference data from current song variables.  

<iframe src="https://bloc-global-assets.s3.amazonaws.com/images-frontend/gifs/Functional%20Next%20and%20Previous%20with%20jQuery/updating_player_bar_song.mp4" frameborder="0" allowfullscreen></iframe>

<br>

**2. Allow listeners to skip to the next or previous song from the Player Bar.**

Solution: Use two functions to handle two different events: when a listener wants to skip to the next song versus the previous song. Each function provides the functionality of wrapping the skips, automatically playing the new song, updating the player bar with new song information, and displaying the appropriate pause/play buttons. 

<iframe src="https://bloc-global-assets.s3.amazonaws.com/images-frontend/gifs/Functional%20Next%20and%20Previous%20with%20jQuery/functional_next_and_previous_jquery_completed.mp4" frameborder="0" allowfullscreen></iframe>

<br>

**3. Differentiate behaviors for the volume control and playback seek bars based on the listener's actions.**


Solution: Listeners are able to increase the volume or forward the song to a specific point by dragging the seekbars on the player bar. Since the two seekbars are almost identical in behavior, we're able to use the same function for both events. Checks were added to determine whether to operate on the player or volume seekbar based what was clicked.

<iframe src="https://bloc-global-assets.s3.amazonaws.com/images-frontend/gifs/Functional%20Seek%20Bars/click_only_seek_bar.mp4" frameborder="0" allowfullscreen></iframe>
<br>

**4. Simplify development and reduce long code.** 

Solution: By refactoring our coding to use jQuery library where appropriate, our code length was significantly reduced and simplified. 


## Results 

The end product allow listeners to play, pause, or skip fluidly on a collection of musical pieces. Listeners can set volume, forward, or rewind with ease using easy to use seekbars. 


## Conclusion

We can further add value to Bloc Jams with the following:

 1. Add a short album description
 2. Group albums by category 
 3. Allow listeners easy access to other albums

