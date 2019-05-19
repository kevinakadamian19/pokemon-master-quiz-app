'use strict';

//Below is an array of objects that indicate quesiton #, question, and answer choices
const quizQuestions = [
		{
			number: 1,
			question: `Which of these pokemon is not legendary?`,
			choice1: 'Kyogre',
			choice2: 'Reshiram',
			choice3: 'Lucario',
			choice4: 'Regigigas',
		},

		{
			number: 2,
			question: `In what tower can the pokemon Ho Oh be found in?`,
			choice1: `Burned Tower`,
			choice2: `Scorced Tower`,
			choice3: `Rainbow Tower`,
			choice4: `Flame Tower`,
		},

		{
			number: 3,
			question: `How many total pokemon are there currently in the Pokedex?`,
			choice1: 782,
			choice2: 950,
			choice3: 807,
			choice4: 1024,
		},

		{
			number: 4,
			question: `What type of Pokemon is Flygon?`,
			choice1: `Dragon/Flying`,
			choice2: `Ground/Flying`,
			choice3: `Flying/Rock`,
			choice4: `Ground/Dragon`,
		},

		{
			number: 5,
			question: `In total how many different types of pokemon are out there?`,
			choice1: 14,
			choice2: 19,
			choice3: 16,
			choice4: 18,
		},

		{
			number: 6,
			question: `What is another name that can be used to refer to the Suicune, Raikou, and Entei?`,
			choice1: `Legendary Beasts`,
			choice2: `Lake Guardians`,
			choice3: `Swords of Justice`,
			choice4: `Aura Trio`,
		}
];

//Below is an array that is the answer key for the quiz
const answerKey = [
	'Lucario',
	`Burned Tower`,
	807,
	`Ground/Dragon`,
	18,
	`Legendary Beasts`
];

//Below are the two functions for the correct, and incorrect feedback template

function correctFeedback() {
	const correctTemplate = `
	
		<div class="got-it-right" id="feedback">
    		<h1>Nice! You got it right!</h1>
    		<img src="pikachu.png" alt="A picture of a happy picture">
    		<button type="button" class="nextButton">Continue</button>
		</div>`;
	return correctTemplate;
}

function incorrectFeedback() {
	const incorrectTemplate = `

		<div class="got-it-wrong" id="feedback">
			<h1>Oops! The correct answer is</h1>
    		<img src="evee.png" alt="A picture of an Evee looking confused.">
			<button type="button" class="nextButton">Continue</button>
		</div>`;
	return incorrectTemplate;
}

//Two variables below are what will be used to show current question count, and total correct answers.
let questionCount = 0;
let correctCount = 0;

//Below is a function that will be used to insert the questiont template into the DOM.
function questionFormat() {
	let questionTemplate = `<h2>Which of these pokemon is not legendary?</h2>
			<form class="question-form">
				<fieldset>
				<label>
					<input type="radio" name="answer" required>
					<span>Kyogre</span>
				</label>
				<label>
					<input type="radio" name="answer" required>
					<span>Reshiram</span>
				</label>
				<label>
					<input type="radio" name="answer" required>
					<span>Lucario</span>
				</label>
				<label>
					<input type="radio" name="answer" required>
					<span>Regigigas</span>
				</label>	
				</fieldset>
				<button type="submit" class="submitButton">Submit Answer</button>
			</form>`;
	return questionTemplate;
}

//This function will be to start the quiz switching from start screen to question screen.

function beginQuiz() {
	$('.start-quiz').on('click', '#start-button', function(event) {
		$('.start-quiz').remove();
		$('.main-box').append(questionFormat());
	});
}

//This function will increase the displayed Question count
function increaseQuestionCount() {

}

//This function will be for submittin an answer to one of the questions.
function submitAnswer() {
	$('.question-form').on('submit', '.submitButton', function(event) {
		event.preventDefault();
		let submission = $('input:checked');
		let answer = submission.val();
		let correct = 'Lucario';
		if (answer === correct) {
			return answerCorrect();
		}
		else {
			return answerIncorrect();
		}
		//Increase questionCount
	});
}

//This function will be for when a user answers a question correctly.
function answerCorrect() {

}

//This function will be for when a user answers a question incorrectly.
function answerIncorrect() {
// return incorrectFeedback();
}

//This function will be to move on to the next question in the quiz after the feedback screen.
function nextQuestion() {

}

//This function is for the end of the quiz to display the total results.
function quizResults() {

}

function renderQuiz() {
	beginQuiz();
	submitAnswer();
	answerCorrect();
	answerIncorrect();
	nextQuestion();
	quizResults();
}

renderQuiz();