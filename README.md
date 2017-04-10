# Slide Select

This is meant to be a base slide select structure that can be easily styled.

To get started: 

- include the slide-select-ss.js into your projects main.js (dependent on jquery and jquery-touch-events)
- include the css, scss, or less into your projects style sheets.
- copy and past the slide select html into a container in your project, slide-select-ss will span the with of its parent container.
- add content into the defined content areas (replace included <p> containing ipsum)


# How slides are selected

Slide select works by using the index of the li.slide-selector 's and the index of the div elements in .slide-select-slides to select the elements.
So for every li.slide-selector there should be a corresponding div in the .slide-select-slides container.


# Setting the active slide

To set the active slide add the class of active to the div you would like to show. Then also add the class of active to the li.slide-selector with the same index of the list.


After following those steps load the page and everything should be good to go.
