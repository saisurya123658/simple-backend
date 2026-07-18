# Explain It Like I Built It

One part of my Temple Management System that I wanted to understand better was how the booking form actually saves a user's booking.

When I first built the form, I thought clicking the **Book** button would somehow save the information automatically. After learning how it works, I realized there are several steps happening in the background.

First, the user enters details like their name, phone number, seva name, and booking date in the React form. React stores these values in its state while the user is typing.

When the user clicks **Submit**, React doesn't save anything directly. Instead, it sends all the form data to my Node.js backend using an HTTP **POST** request.

The Express server receives this request, reads the data from the request body, and checks that the required information is present. Then it runs an SQL query to insert the booking into my MySQL database.

If the database saves the booking successfully, the backend sends a success response back to React. The React application then shows a success message to the user. If something goes wrong, like the server is not running or the database connection fails, React receives an error response and displays an error message instead.

Understanding this made me realize that the frontend and backend have different jobs. React is responsible for collecting information and displaying the user interface, while the Node.js backend handles the business logic and communicates with the database. The data is not stored by React itself—it travels from the browser to the server and then into the database.
