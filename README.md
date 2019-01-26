# h4i-project
Front-End application project for Hack4Impact.

This project has three different HTML files: one for the homepage (h4i.html), one for the 
About Us page with the pictures and bios of the example team members (aboutus.html) and a third
for the application form for new members (application.html). The application form is not connected
to a database yet since I had chosen the front-end project, but all sections of the form are
labelled to easily mark the different data values being accepted. There is a main .css styling sheet
for all the pages (h4i-styles.css), but the application form (due to the large number of different
sections) has an additional separate styling sheet, titled accordingly as application-styles.css. I
also linked a short .js file which makes the navbar fade on scroll and reappear on hover. All of
the pages are responsive for cellphone, tablet, and desktop sized screens. 


Since the form is already set up to accept data from a user, we would first need to create a PHP
file to accept the inputted data and transfer it to a database using SQL. The PHP file would be
connected where the form tag in application.html says "action=''". This file would list out the
commands which takes the data accepted from a form and writes it to the chosen database.

The backend program allows us to send and recieve data (such as the application form), using 
the frontend as it's mode of presentation. If we were to create a blog, for example, we would
store the blog posts in a database and load the posts from the database to the webpage using
a query request (like in the PHP file example above). This data would then be formatted using
the HTML and CSS code.
