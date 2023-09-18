# Task Manager App Web Application
This is a Task Manager App web application created using Node.js and Express.js. Purpose of creating this application is to understand advanced concepts of Node.js/Express.js and abile to integrate a more refined frontend.

The app has three users with ADMIN and USER role. "admin" user has ADMIN role and "user 1" and "user 2" has USER role. The Add/Edit/Delete operation on task is only performed by ADMIN role user i.e. "admin", USER role users i.e. "user 1" or "user 2" only perform read operation.

To set any user you need to select it from provied dropdown menu at top.

The concepts/tools I have used to build this web app is listed below:
- Routing: indexRouter(for Dashboard), taskRoute(perform CRUD operation on tasks)
- Middleware: morgan (for logging), custom authentication middleware 
- Template Engine(Pug): to create HTML Template for each page and make it content-dynamic
- Error Handling
- Database Integration with Node.js: used SQLite database
- Sequelize: ORM tool to map our SQLite database to object
- authentication:
    - for authenticating user
    - for protecting route by role
 - Basic HTML ans CSS

## Steps to run it locally:
  1. clone repo: `git clone https://github.com/aniket-k-chauhan/promact-week-1-assignment-1](https://github.com/aniket-k-chauhan/promact-week-2-assignment`
  2. install packges using: `npm i`
  3. run application using: `node index.js`
 
Here is the live running [app](https://spiral-paper-appendix.glitch.me/).
