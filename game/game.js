const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "The largest circular storm in our solar system is on the surface of which of the following planets?",
        choice1: "Jupiter",
        choice2: "Venus",
        choice3: "Uranus",
        choice4: "Earth",
        answer: 1,
    },
    {
        question:"The rapidly moving stream of charged particles that is being driven away from the sun is known as what?",
        choice1: "Solar Wind",
        choice2: "Solar Flares",
        choice3: "Solar Currents",
        choice4: "None",
        answer: 1,
    },
    {
        question: "Rounded to the nearest day, the Mercurian year is equal to:",
        choice1: "111 days",
        choice2: "88 days",
        choice3: "77 days",
        choice4: "16 days",
        answer: 2,
    },
      {
        question: "One of the largest volcanos in our solar system-if not the largest-is named Olympus Mons. This volcano is located on:",
        choice1: "Jupiter's moon Callisto",
        choice2: "Saturn's moon Titan",
        choice3: "Venus",
        choice4: "Mars",
        answer: 4,
    },
      {
        question: "Which type of star is maintained by the pressure of an electron gas?",
        choice1: "Main Sequence Star",
        choice2: "White Dwarf",
        choice3: "Neutron Star",
        choice4: "Black Hole",
        answer: 2,
    },
      {
        question: "In our solar system, which planet has a moon with a mass closest to its own?",
        choice1: "Mars",
        choice2: "Saturn",
        choice3: "Pluto",
        choice4: "Uranus",
        answer: 3,
    },
          {
        question: "One of the largest moon in our solar system has an atmosphere that is denser than the atmosphere of Mars. The name of this moon is:",
        choice1: "Titan",
        choice2: "Ganymede",
        choice3: "Triton",
        choice4: "Chiron",
        answer: 1,
    },
        {
        question: "In the Milky Way there are approximately",
        choice1: "9 million stars",
        choice2: "77 million stars",
        choice3: "167 million stars",
        choice4: "200 billion stars",
        answer: 4,
    },
        {
        question: "A black hole with the mass of the earth would be the size of:",
        choice1: "The Sun",
        choice2: "The Moon",
        choice3: "A Bean bag",
        choice4: "A Marble",
        answer: 4,
    },
    {
        question: "95% of the Martian atmosphere is composed of what substance?",
        choice1: "Carbon dioxide",
        choice2: "Nitrogen",
        choice3: "Argon ",
        choice4: "Carbon monoxide",
        answer: 1,
    }
]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })


  
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        
        
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
choices[currentQuestion.answer-1].parentElement.classList.add('correct') 

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
          choices[currentQuestion.answer-1].parentElement.classList.remove('correct') 
            getNewQuestion()
        }, 1000)
    })
})
             

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()