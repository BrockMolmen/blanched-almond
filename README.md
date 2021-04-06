# CSS Color Match 
A color matching game for the 147 known colors you can call in css.

# Motivation 
I wanted to build a game that would test and sharpen the players knowledge of the known color names you can call in CSS design. The player will be able to retake the quiz and try to improve on their high score.

---
### Screenshots
![Screenshot 1 - Cyan](assets/Scrnsht1.jpeg)
![Screenshot 2 - Cyan](assets/Scrnsht2.jpeg)
![Screenshot 1 - Yellow](assets/Scrnsht3.jpeg)

---
### User Story & Wireframes
* The player will arrive to the game with a blank stage
* Once "Start" is clicked, the stage will be loaded with the current color level
* There is a total of 10 color level that increase in difficulty as you progress
  - the levels were based of color family sets from [147 Colors](http://www.colors.commutercreative.com/grid/)
    - Cyan   - 5 colors
    - Orange - 6 colors
    - Pink   - 6 colors
    - Red    - 9 colors
    - Yellow - 10 colors
    - Brown  - 16 colors
    - Blue   - 16 colors
    - Purple - 18 colors 
    - Green  - 19 colors
    - Gray   - 32 colors
* The possible answers will be displayed on the right of the screen
* Each color has an input box for the player to type their guess
* Once the player had filled in their answers, they will click "Submit"
* The player's inputs are now check against the correct answers, and the score will be updated
* The score will increase 1 point for each correct answer
* Any incorrect answers will be grayed out
* Now, when the player hits start, they the next level will load with new colors and answers
* Once the player progresses through all 10 levels, it will notify the player the game is over and provide their final score.

![wireframe](assets/wireframe.jpg)

---
### Technologies & Code Snippets
* HTML
* Javascript
* CSS
 
 ```js
     const checkScore = () => {
        let playerAnswers = document.querySelectorAll('.answerInput')
        let correctAnswers = document.querySelectorAll('.colorBox')
        or (let i = 0; i < correctAnswers.length; i++) {
            if (playerAnswers[i].value === correctAnswers[i].style.backgroundColor) {
                playerScore++
            } else if (playerAnswers[i].value !== correctAnswers[i].style.backgroundColor) {
                playerAnswers[i].style.color = 'rgba(255, 255, 255, 0.4)'
            }
            document.getElementById('playerScoreContainer').innerHTML = `Score: ${playerScore}`
        }
        
    }
```
---
### Credits
* [147 Colors](http://www.colors.commutercreative.com/grid/)

 
---
### Current State and Future Development

[Live Site - CSS Color Match](https://brockmolmen.github.io/CSS-Color-Match/)

As of right now, level one (cyan) is a working product, I will soon be implementing more levels and methods for progressing through the game. I would also like to add a function that crosses out answers as the player inputs them as well as some static and scrolling functions to the stage container.


