# FINAL_mai2023

![header](./HeaderReadme/header1.png "Header" )  

Holidaze - accomodation booking site

# Delivery


[Netlify hosted page](https://holidaze-moami.netlify.app/) 

[Trello](https://trello.com/invite/b/59Le7GbB/ATTI219558ad0fd21d93d64637a41cdca09eB84FA9D0/holidaze) 

[Style Guide](https://www.figma.com/file/kr6CymBQ4jGtg5hxFaXoWT/Holidaze-Exam-Final?type=design&node-id=101%3A276&t=Y56DNKw17CXhhvmx-1)


[Figma Prototype Desktop](https://www.figma.com/file/kr6CymBQ4jGtg5hxFaXoWT/Holidaze-Exam-Final?type=design&node-id=1%3A130&t=Y56DNKw17CXhhvmx-1)

[Figma Prototype Mobile](https://www.figma.com/file/kr6CymBQ4jGtg5hxFaXoWT/Holidaze-Exam-Final?type=design&node-id=1%3A131&t=GSee9w8aJ2FGaSsg-1)

Gantt:
![header](./HeaderReadme/Gantt.png "Gantt" )  

# Setup and testing

npm i  
vite build  
npm run dev

# Tools

React
Vite
React-Redux
styled-components
react-router-dom
react-hook-forms
Ant.design

# What I learned

The one thing I will remember from this project was that it was a bad idea to toggle different "pages" from homepage since it makes it not possible to restore that state of the page on "back" buttons which makes the page navigation a bit impractical unpredictable.
The menu changes based on where the user is, and sometimes since the user is still technically on the "homepage" you cannot refresh the current state of the page but instead be brought back to the actual homepage. It also makes it so the user sometimes cannot use the logo to get back to homepage. 

I would rather make a separate actual page instead to make things easier. Mainly an issue due to the "edit" page being the only page that is an actual different page. Either everything should be conditionally rendered or they should all be separate pages.

I had a hard time figuring out how to utilize Redux, and I am still not very confident in using the tool, but I did learn a lot and feel like I got a better understanding of it now.

# Sources:

Missing img: https://depositphotos.com/vector-images/placeholder.html
Other images I used are taken from Unsplash.com

