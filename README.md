# Hangman

This was an assignment for the React portion of my coding bootcamp. It is a React app that simulates the game "Hangman".

**Stack used**: JavaScript - React - CSS - React-Bootstrap - Heroku

## The brief

These were the detailed instructions for the assignment:

1. It should be created using Create React App.
2. It should include attractively styled components (at least 4 different types of components) that respond to user interaction. Feel free to use React-Bootstrap or another library and/or your own custom stylesheets.
3. A number of components should be rendered using the array.Map() method. Each component rendered in this way should have a key that uniquely identifies it.
4. User interaction should modify the state of some components.
5. The state of two or more components should be synced.
6. The user should be able to restart the game.
7. The user should be clearly informed if they have “won” or “lost” the game.
8. The user should easily be able to request “help” that will inform the user about the rules of the game from the UI.
9. The UI should be attractive, easy to use and intuitive.
10. It should include a file called “readme.md” which explains the rules of the game. This file should also provide clear instructions that an end user will be
    able to follow to be able to install and run your app on their local machine.
11. Your mentor should be able to launch your app by typing ‘npm start’ from the command line interface.
12. The file structure of the project should be well organized in line with guidelines here . The code should also be easy to read adhering to Google’s style guide about indentation, meaningful variable and component names etc.
13. Your code should be well documented with appropriate comments.

## How to play Hangman

Go to the app here: https://tamiragun-hangman.herokuapp.com/

When you click start, the computer will pick a random word and display the number of letters it contains. Your job is to guess which letters the word contains, until you can guess the entire word. You do this by entering a letter in the field below the image, and clicking 'Guess'.

If the secret word contains your letter, it will show up in the corresponding place, allowing you to better guess the remaining letters. However if the secret word does not contain your letter, then the drawing of a hanging man is progressed with one step. You win if you guess all letters in the word correctly, and you lose if your incorrect guesses lead to the full man being hung.

## How to install this project

If you want to play around with the code yourself, you can do so by following these steps:

- To play this game, clone the repository to your local computer.
- Navigate to the directory where you saved the repository.
- Inside the repository, start a terminal window.
- Type `npm install` and wait for the process to run.
- If you don't have npm installed, you can get it here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
- Now type `npm start` and wait for your browser to open a new window.
- You should now be able to play Hangman!
