# h4i-project
Front-End application project for Hack4Impact.

h4i.html is the homepage for the website.
application.html is the application form which would eventually get connected to a database.

Since the form is already set up to accept data from a user, we would first need to create a PHP
file to accept the inputted data and transfer it to a database using SQL. The PHP file would be
connected where the form tag in application.html says "action=''". This file would list out the
commands which takes the data accepted from a form and writes it to the chosen database.

The backend program allows us to send and recieve data (such as the application form), using 
the frontend as it's mode of presentation. If we were to create a blog, for example, we would
store the blog posts in a database and load the posts from the database to the webpage using
a query request (like in the PHP file example above). This data would then be formatted using
the HTML and CSS code.
