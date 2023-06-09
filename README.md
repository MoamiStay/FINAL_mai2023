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

Clone repo:  
git clone git@github.com:MoamiStay/FINAL_mai2023.git  

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

# Process

The process was quite different this time compared to previous projects. I usually spend too much time on the figma design and after finishing the design it takes a long time for me to start the implementation. It also means that while the design looks alright, it might not fit with the functionality I need to implement and therefore the workflow and motivation to work gets worse as I get more frustrated with making it all fit into the design I made.  

So this time I decided to do the procress in the complete opposite order. I coded everything first in pure HTML and added all design after.  
It was a big risk considering I've never tried this approach before and on top of that I had to use a react CSS framework I'd never used before. Needless to say, the design it not at all perfect and there are still some issue left unsolved. However all the requierd functionality is in place and works well (except menu navigation) at the cost of the design suffering a little bit.  

I don't see myself using this approach again any time soon, but it was interesting to test it out.  

# Sources:

Missing img: https://depositphotos.com/vector-images/placeholder.html  
Other images I used are taken from Unsplash.com

