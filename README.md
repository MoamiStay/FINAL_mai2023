# FINAL_mai2023

![header](./HeaderReadme/header1.png "Header" )  

Holidaze - accomodation booking site

# Delivery

Trello:  
https://trello.com/invite/b/59Le7GbB/ATTI219558ad0fd21d93d64637a41cdca09eB84FA9D0/holidaze

Style Guide:
https://www.figma.com/file/kr6CymBQ4jGtg5hxFaXoWT/Holidaze-Exam-Final?type=design&node-id=101%3A276&t=Y56DNKw17CXhhvmx-1

Figma Prototype:
https://www.figma.com/file/kr6CymBQ4jGtg5hxFaXoWT/Holidaze-Exam-Final?type=design&node-id=1%3A130&t=Y56DNKw17CXhhvmx-1

Netlify:
https://holidaze-moami.netlify.app/

Gantt:
![header](./HeaderReadme/Screenshot 2023-04-16154153.png "Gantt" )  

# Setup and testing

npm i  
npm run build  
npm run dev

# Tools

React
Redux
styled-components
react-router-dom
react-hook-forms
Ant.design

# What I learned

- Bad idea to toggle different "pages" from homepage since it makes it not possible to restore that state of the page on "back" buttons which makes the page a bit impractical. + hard to get the fresh data to show on initial load without doing a manual reload.

Would rather make a separate actual page instead to make things easier. Mainly an issue due to the "edit" page being the only page that is an actual different page. Either everything should be conditionally rendered or they should all be separate pages.

I had a hard time figuring out how to utilize Redux, and I am still not very confident in using the tool, but I did learn a lot and feel like I got a better understanding of it now.

# Sources:

Missing img: https://depositphotos.com/vector-images/placeholder.html
Other images taken from Unsplash.com

##############################################

<!-- - npx create-react-app holidaze -->

<!-- - npm install styled-components -->

<!-- - npm i @reduxjs/toolkit react-redux -->

<!-- - npm i react-router-dom -->

  <!-- - (npm i react-hook-form)
- (npm i @hookform/resolvers yup) -->

# Redux w/payload example:

search: profileImg
file: Components/SideProfile/Avatar/InputNewAvatar.jsx + Redux/AvatarSlice.js

# Redirect to a another page on click

<!-- <button onClick={() => dispatch(logout())}><Link to="/Logout">LoggedOut</Link></button> -->

# toggle show-component on click

from /SideProfile/Avatar/ChangeImg.jsx

<!--
        <button onClick={() => setIsToggled(!isToggled)}>Edit profile image</button>
        {isToggled && <InputNewAvatar />} -->
