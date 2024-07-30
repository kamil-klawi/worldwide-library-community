# Worldwide Library Community

Worldwide library community is my first fullstack project that I created on my own. This is web service that allows you to easily browse, add, edit and remove books, authors and translators. I used Spring Boot with React.js.

## Tools:

- Volta
- DBeaver
- Docker
- Any text editor (my preference is Visual Studio Code)

## Instructions:

Copy the repository and start at the root path in the directory.

### Backend:

1. Run docker compose with the command `docker-compose up`. The images should be created automatically on the docker desktop.
2. Launch DBeaver and a create new database connection. Let's select PostgreSQL as your database. Then set the host as localhost, database as worldwide_library_community_db, username and password as admin.
3. Go to the `library-community` directory, find a file called LibraryCommunityApplication.java and run the application. If everything goes well, you can go to the Frontend side.


### Frontend:

1. From the root directory, navigate to the `library-community-ui` directory.
2. Using yarn install the necessary dependencies. Run the command `volta run yarn` or `yarn` in the terminal.
3. Then use the application run command `volta run yarn dev` or `yarn dev`
4. The application should run at URL http://localhost:3001/
