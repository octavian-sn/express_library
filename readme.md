
# Library Management Web Application
This library management web application is a comprehensive solution that simplifies the process of managing and accessing a collection of books, authors, genres, and book instances. Built on the robust Node.js platform, the application harnesses the power of MongoDB for data storage and retrieval. It uses Mongoose as an Object-Document Mapping (ODM) tool to interact seamlessly with the database, providing a structured and efficient approach to handling data.


## Tech-stack
 - Language: [JavaScript (Node.JS)](https://nodejs.org/en)
 - Framework: [Express](https://expressjs.com/)
 - Database: [MongoDB](https://www.mongodb.com/)
 - Object Modeling: [Mongoose](https://mongoosejs.com/)
 - Templating Engine: [EJS](https://ejs.co/)


## Live Link

https://


## Features

- CRUD Operations: Easily Create, Read, Update, and Delete records for books, authors, genres, and book instances. The application's user-friendly interface empowers users to effortlessly manage their library collections.
- Data Relationships: This app recognizes the intricate relationships between books, authors, and genres. Each book can be attributed to a specific author and genre. Book instances allow you to manage physical copies of books.
- Validation and Sanitization: Express Validator is utilized to validate and sanitize incoming data, ensuring data quality and integrity. User inputs are rigorously checked before being stored in the database.
- Date Formatting: Luxon is employed to format dates consistently across the application, providing a polished and uniform user experience.
- Express Async Handler: Asynchronous operations are seamlessly integrated with the help of Express Async Handler. This ensures that the application remains responsive and performs efficiently, even during data-intensive tasks.


## Screenshots

![Home](/public/images/home.png)
![Books](/public/images/books.png)
![Book](/public/images/book.png)
![Update](/public/images/update.png)
![Delete](/public/images/delete.png)