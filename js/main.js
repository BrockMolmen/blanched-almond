const startBtn = document.querySelector('.startButton')
const submitBtn = document.querySelector('.submitButton')
const resetBtn = document.querySelector('.resetButton')


// global game veriables
let levelNum = 1
let playerScore = 0

// Levels
const level1 = ['cadetblue', 'cyan', 'lightcyan', 'darkcyan', 'teal']
const level2 = ['coral', 'darkorange', 'gold', 'orange', 'orangered', 'tomato']
const level3 = ['deeppink', 'hotpink', 'lightpink', 'mediumvioletred', 'palevioletred', 'pink']
const level4 = ['crimson', 'darkred', 'darksalmon', 'firebrick', 'indianred', 'lightcoral', 'lightsalmon', 'red', 'salmon', 'mistyrose']
const level5 = ['darkkhaki', 'khaki', 'lemonchiffon', 'lightgoldenrodyellow', 'lightyellow', 'moccasin', 'palegoldenrod', 'papayawhip', 'peachpuff', 'yellow']
const level6 = ['bisque', 'blanchedalmond','brown','burlywood','chocolate','cornsilk','darkgoldenrod','goldenrod','maroon','peru','rosybrown','saddlebrown','sandybrown','sienna','tan']
const level7 = ['blue', 'aqua','lightblue','lightskyblue','lightsteelblue','mediumblue','midnightblue','navy','powderblue','royalblue','skyblue','steelblue', 'cornflowerblue', 'darkblue', 'deepskyblue', 'dodgerblue','powderblue']
const level8 = ['darkmagenta','darkorchid','darkslateblue','darkviolet','fuchsia','indigo','lavender','magenta','mediumorchid','mediumpurple','mediumslateblue','orchid','plum','purple','rebeccapurple','slateblue','thistle','violet', 'blueviolet']
const level9 = ['aliceblue','antiquewhite','azure','beige','black','darkgray','dimgray','floralwhite','gainsboro','ghostwhite','gray','honeydew','ivory', 'lavenderblush','lightgray', 'lightslategray', 'linen','mintcream', 'navajowhite', 'oldlace','seashell', 'silver', 'slategray', 'snow', 'wheat', 'white', 'whitesmoke']
const level10 = ['aquamarine', 'chartreuse','darkgreen','darkolivegreen','darkseagreen','forestgreen','green','greenyellow','lawngreen','lightgreen','lime','limegreen','mediumseagreen','mediumspringgreen','olive','olivedrab','palegreen','seagreen','springgreen','yellowgreen', 'darkturquoise','lightseagreen','mediumaquamarine','mediumturquoise','paleturquoise', 'turquoise','darkslategray']


const runGame = {
    // // Set Level
    levelSelect() {
        if (levelNum === 1) {
            currentLevel = level1
        } else if (levelNum === 2) {
            currentLevel = level2
        } else if (levelNum === 3) {
            currentLevel = level3
        } else if (levelNum === 4) {
            currentLevel = level4
        } else if (levelNum === 5) {
            currentLevel = level5
        } else if (levelNum === 6) {
            currentLevel = level6
        } else if (levelNum === 7) {
            currentLevel = level7
        } else if (levelNum === 8) {
            currentLevel = level8
        } else if (levelNum === 9) {
            currentLevel = level9
        } else if (levelNum === 10) {
            currentLevel = level10
        }
    },
    //shuffles colors for random display 
    shuffleColors() {
        for (let i = currentLevel.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            const temp = currentLevel[i]
            currentLevel[i] = currentLevel[j]
            currentLevel[j] = temp
        }
    },

    //builds divs and set background color and id/class
    buildStage () {
        for (let i = 0; i < currentLevel.length; i++) {

            const createColorBox = document.createElement('div')
            createColorBox.style.backgroundColor = currentLevel[i]
            createColorBox.setAttribute('class', 'colorBox')
            createColorBox.setAttribute('id', 'colorBox')
            levelContainer.appendChild(createColorBox)

            //Adds an input box ontop of the colorbox div
            let guessBox = document.createElement('input')
            guessBox.setAttribute('type', 'text')
            guessBox.setAttribute('class', 'answerInput')
            guessBox.setAttribute('id', 'answerInput')
            createColorBox.appendChild(guessBox)
        }
        
    },
    
    //Scraps randomized array of color names and displays them for the player to use. 
    getPool () {
        for (let i = 0; i < currentLevel.length; i++) {
            let colorName = currentLevel[i]
            let possAnswer = document.createElement('li')
            possAnswer.setAttribute('class', 'choice')
            possAnswer.innerHTML = colorName
            document.getElementById('answerPool').appendChild(possAnswer)
        }
    },
    //reserts Input boxes
    resetStage() {
        document.getElementById('levelContainer').reset()
        playerScore = 0
        levelNum = 1
        let rmvBoxes = document.querySelectorAll("#colorBox")
        for (let cbox of rmvBoxes) {
            cbox.remove()
        }
        let rmvWB = document.querySelectorAll(".choice")
            for (let word of rmvWB) {
            word.remove()
            }
        document.getElementById('playerScoreContainer').innerHTML = `Score: ${playerScore}/142`
    }
}



//grabs input and correct answers and compares them, updates score and modifies color of incorect answer
const checkScore = () => {
    let playerAnswers = document.querySelectorAll('.answerInput')
    let correctAnswers = document.querySelectorAll('.colorBox')
    for (let i = 0; i < correctAnswers.length; i++) {
        if (playerAnswers[i].value === correctAnswers[i].style.backgroundColor) {
            playerScore++
        } else if (playerAnswers[i].value !== correctAnswers[i].style.backgroundColor) {
            console.log('wrong')

            playerAnswers[i].style.color = 'rgba(255, 255, 255, 0.4)'

        }
        document.getElementById('playerScoreContainer').innerHTML = `Score: ${playerScore}/142`
    }

    // Handel Level change
    levelNum++
    if (levelNum === 11) {
        levelNum = 1
        let directions = document.querySelector(".info")
        directions.classList.remove('hidden')
    }

    //start button text
    if (levelNum !== 1) {
        startBtn.innerHTML = "Next"
    } else {
        startBtn.innerHTML = "Start"
    }
}

startBtn.addEventListener('click', () => {
    if (levelNum === 1) {
        playerScore = 0
    }
    let rmvBoxes = document.querySelectorAll("#colorBox")
    for (let cbox of rmvBoxes) {
    cbox.remove()
    }
    let rmvWB = document.querySelectorAll(".choice")
    for (let word of rmvWB) {
    word.remove()
    }

    runGame.levelSelect()
    runGame.shuffleColors()
    runGame.buildStage()
    runGame.shuffleColors()
    runGame.getPool()

    let directions = document.querySelector(".info")
    directions.classList.add('hidden')

    }
)

submitBtn.addEventListener('click', checkScore)
resetBtn.addEventListener('click', runGame.resetStage)


// function crossOut() {
//     let poolAs = document.querySelectorAll('.choice')
//     let inputAs =  document.querySelectorAll('.answerInput')

//     for (let i = 0; i > inputAs.length; i++) {
//         for (let j=0; j> poolAs.length; j++) {
//             if (inputAs[i].value == poolAs[j].innerHTML) {
//                 console.log(inputAs[i],poolAs[j])
//                 // poolAs[j].style.text-decoration = "line-through"
//             }
//         }
//     }
// }
// crossOut()


// const activeSubmit = () => {
//     let f = document.forms["levelContainer"].elements
//     const cansubmit = ture

//     for (let i = 0; i < f.lenth; i++ ) {
//         if (f[i].value.length == 0) cansubmit = false;
//     }
    
//     if (cansubmit) {
//         submitBtn.disabaled = false
//     } else {
//         submitBtn.disabled = 'disabled'
//     }
// }

// activeSubmit()


