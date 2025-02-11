## Movie Search and Watchlist App
Learning Objectives:

- Learn about project structure and setup.
- Revise on using APIs using async JS (fetch/ axios).
- Revise on using React Router to set up routes.
- Learn/Revise on styling the JSX elements/components.
- Display the API results dynamically using Components.

### Phase 1 (Tuesday):
- Learn about project structure and setup.
- Revise on using APIs using async JS (fetch/ axios).
- Revise on using React Router to set up routes.

### Phase 2 (Thursday):
- MovieCard component for better display of results.
- Watchlist feature (save movies to local storage or context).
- Watchlist page
- Implement "Delete from Watchlist" functionality.


### Phase 3 (Saturday):
- Having a proper Navbar
- Added the Details Page for each movie
- Added "Go Back" navigation
- Disable "Add to Watchlist" after adding it
- Work on Notification Context, Component


### Note: Make sure you create a .env file in the root directory and provide your unique API KEY.


## Steps

- Create a GIT repo
- Create a folder and install vite

        npm create vite@latest . -- --template react

        npm install && npm run dev

- Install react-router-dom for routes
- Start creating the Home page, create a function that returns one HTML component, usually div or fragment.
- Define routes in the App.jsx file to be able to see your application

### Steps
- 1 Step: If it's generalised and meant to be used in different components and pages: create a context. Define state variables and functionalities.
- Create a component or page depending on the use case, make sure you import it.
- If you defined a context, import the 'provider' as well towards the top.
- When you have the components, wherever you want to use them, you need to import them there.


