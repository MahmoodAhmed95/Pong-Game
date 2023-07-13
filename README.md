## Project Details

![Alt text](<Screenshot from 2023-07-12 16-11-36.png>)

This project is a browser game of Pong Game with Vanilla Javascript.
Built With

    1. HTML
    2. CSS
    3. Javascript

**Deployment**

The game is deployed on GitHub Pages and it can be found here:https://git.generalassemb.ly/mma/Project-1
Installation

Use the clone button to download the game source code. Open the game.html file in your browser and the game should start, if not check console for any issues. No images or local audio files where used so the game should work on any machine.
Features:

    - Responsive mobile design
    The game is designed to be responsive to different screen sizes using the viewport height and viewport width units for sizing.

![Alt text](<Screenshot from 2023-07-13 09-58-58.png>)

    - Speed customization
    Players can choose the ball moving speed, which changes depending on the level.

![Alt text](<Screenshot from 2023-07-12 16-48-00.png>)

    - Scoring customization
    Players can choose how many goals they need to score to win Keeping track of the score and level.

![Alt text](<Screenshot from 2023-07-12 16-47-42.png>)

    - Background color customization
    Users can choose the background color they prefer.

![Alt text](<Screenshot from 2023-07-12 16-44-32.png>)

**_Game Architecture and Challenges_**

Pong Game is a classic arcade video game that was originally released by Atari in 1972. The game is a simple two-player game that simulates table tennis. The objective of the game is to score 4 to 10(the user can choose is score level) goals against the opponent to win the game. There is also a lose state, where the player will lose the game if the opponent scores 4 to 10 (depend on the score level choosen) against them. The game will continue until one of the players reaches the winning score level.

Overall, this Pong game project is a fun and classic game that is perfect for two players to enjoy.

The game is two player game. The game begins by clicking the ‘Start’ button.

- HOW TO PLAY?
  player one can move the racket by the arrows arrow up to move up and arrow down to move down , player two can move the racket by S to move down and W to move up.

- A way to reset the board and play again?
  when one of the player score 4 to 10 ( depend on the score level choosen) goals an alert will appear after clicking the button the page will reloaded or when the user click on restart button it will reload the page and he can play again.

**WIN STATE**
when the player score 4 to 10 ( depend on the score level choosen) goals againest the other player.
![Alt text](<Screenshot from 2023-07-12 16-48-49.png>)

- Explain the technical details?
  In terms of technical details, the game uses JavaScript to calculate the ball's movement in the court and to make it rebound when it hits the rackets.
  when the game start the ball will immeidiatly move.
  the ball moves vertically and horizontally by increasing the value of x and y at the same time.

The game build can be divided into three technical challenges:

**MOVEMENT**

    the ball moving around the court between the top and bottom and rebound.
    the ball can pass from left and righ to score a goal.

**COLLISION CHECK**

    accurately calculating the ball's movement and ensuring that it rebounds correctly.
    collision check with the bottom, and Top of the court.
    collision check with the rackets when the ball hit one of them.

**Future improvements**

    Playing VS computer - let the player compete against the computer.
    Designing - introduce a new design to the game to make it more visually appealing.
    Playing Online - connect the game to the internet to let players challenge other players online.
    Leaderboard - develop a feature that gives the winning player online XP so they can compete globally and be the leaderboard leader.

**Author**

Mahmood Ahmed
