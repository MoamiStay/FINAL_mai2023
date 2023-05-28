Goal
To take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate’s general development capabilities, in addition to visual and technical skills.

Brief
A newly launched accommodation booking site called Holidaze has approached you to develop a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end accommodation booking application.

There are two aspects to this brief: the customer-facing side of the website where users can book holidays at a venue, and an admin-facing side of the website where users can register and manage venues and bookings at those venues.

Resources
API Guide API Documentation: https://docs.noroff.dev/
Swagger: https://nf-api.onrender.com/docs/static/index.html

# REQUIREMENTS

<!-- A user may view a list of Venues -->

<!-- A user may search for a specific Venue -->

<!-- A user may view a specific Venue page by id -->

A user may view a calendar with available dates for a Venue

<!-- A user with a stud.noroff.no email may register as a customer -->

<!-- A registered customer may create a booking at a Venue -->

<!-- A registered customer may view their upcoming bookings -->

<!-- A user with a stud.noroff.no email may register as a Venue manager -->

<!-- A registered Venue manager may create a Venue -->

<!-- A registered Venue manager may update a Venue they manage -->

<!-- A registered Venue manager may delete a Venue they manage -->

<!-- A registered Venue manager may view bookings for a Venue they manage -->

<!-- A registered user may login -->

<!-- A registered user may update their avatar -->

<!-- A registered user may logout -->

# Technical Restrictions

<!-- Must use an approved JavaScript Framework -->
<!--
Must use an approved CSS Framework -->

<!-- Must be hosted on an approved Static Host
(Currently only manual upolad works) -->

<!-- Must use an approved Design Application -->

<!-- Must use an approved Planning Application -->

Required Links

# Must be included

<!-- A Gantt chart for project timing -->

A design prototype
A style guide

<!-- A kanban project board -->

A repository link
A hosted application demo link
Approved Resources; This list covers libraries and services that have been vetted by the company and approved for use.

# Delivery

Include the required links in the Moodle delivery window using this template format.

All final changes must be merged into the default branch main or master. Other branches will not be checked.

Ensure that the readme.md file describes your project thoroughly, including how to setup and run the project locally and any special instructions for testers.

# What I learned

- Bad idea to toggle different "pages" from homepage since it makes it not possible to restore that state of the page on "back" buttons which makes the page a bit impractical. + hard to get the fresh data to show on initial load without doing a manual reload.

Would rather make a separate actual page instead to make things easier. Mainly an issue due to the "edit" page being the only page that is an actual different page. Either everything should be conditionally rendered or they should all be separate pages.

I had a hard time figuring out how to utilize Redux, and I am still not very confident in using the tool, but I did learn a lot and feel like I got a better understanding of it now.
