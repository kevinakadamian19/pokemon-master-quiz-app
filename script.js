'use strict';

//Below is an array of objects that indicate quesiton #, question, and answer choices
const quizQuestions = [
		{
			number: 0,
			question: `Which of these pokemon is not legendary?`,
			choice1: 'Kyogre',
			choice2: 'Reshiram',
			choice3: 'Lucario',
			choice4: 'Regigigas',
		},

		{
			number: 1,
			question: `In what tower can the pokemon Ho Oh be found in?`,
			choice1: `Burned Tower`,
			choice2: `Scorced Tower`,
			choice3: `Rainbow Tower`,
			choice4: `Flame Tower`,
		},

		{
			number: 2,
			question: `How many total pokemon are there currently in the Pokedex?`,
			choice1: 782,
			choice2: 950,
			choice3: 807,
			choice4: 1024,
		},

		{
			number: 3,
			question: `What type of Pokemon is Flygon?`,
			choice1: `Dragon/Flying`,
			choice2: `Ground/Flying`,
			choice3: `Flying/Rock`,
			choice4: `Ground/Dragon`,
		},

		{
			number: 4,
			question: `In total how many different types of pokemon are out there?`,
			choice1: 14,
			choice2: 19,
			choice3: 16,
			choice4: 18,
		},

		{
			number: 5,
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
	'807',
	`Ground/Dragon`,
	'18',
	`Legendary Beasts`
];

//Two variables below are what will be used to show current question count, and total correct answers.
let questionCount = 0;
let correctCount = 0;

//Below is a function that will be used to insert the questiont template into the DOM.
function questionFormat() {
	let questionTemplate = `
			<form class="question-form">
				<h1>${quizQuestions[questionCount].question}</h1>
				<fieldset>
				<label>
					<input type="radio" name="answer" value="${quizQuestions[questionCount].choice1}" required>
					<span>${quizQuestions[questionCount].choice1}</span>
				</label>
				<label>
					<input type="radio" name="answer" value="${quizQuestions[questionCount].choice2}" required>
					<span>${quizQuestions[questionCount].choice2}</span>
				</label>
				<label>
					<input type="radio" name="answer" value="${quizQuestions[questionCount].choice3}" required>
					<span>${quizQuestions[questionCount].choice3}</span>
				</label>
				<label>
					<input type="radio" name="answer" value="${quizQuestions[questionCount].choice4}" required>
					<span>${quizQuestions[questionCount].choice4}</span>
				</label>	
				</fieldset>
				<button type="submit" class="submitButton">Submit Answer</button>
			</form>`;
	return questionTemplate;
}

//Below are the two functions for the correct, and incorrect feedback template

function correctFeedback() {
	const correctTemplate = `
	
		<div class="right feedback">
    		<h1>Nice! ${answerKey[questionCount]} is the right answer!</h1>
    		<img src="pikachu.png" alt="A picture of a happy picture">
    		<button type="button" class="nextButton">Continue</button>
		</div>`;
	return correctTemplate;
}

function incorrectFeedback() {
	const incorrectTemplate = `

		<div class="wrong feedback">
			<h1>Oops! The correct answer is ${answerKey[questionCount]}</h1>
    		<img src="evee.png" alt="A picture of an Evee looking confused.">
			<button type="button" class="nextButton">Continue</button>
		</div>`;
	return incorrectTemplate;
}

//This function will be to start the quiz switching from start screen to question screen.

function beginQuiz() {
	$('.start-quiz').on('click', '#start-button', function(event) {
		$('.start-quiz').remove();
		$('.main-box').append(questionFormat());
		$('#question-number').text(questionCount+1);
	});
}

//This function will increase the displayed Question count
function increaseQuestionCount() {
	questionCount++;
	$('#question-number').text(questionCount+1);
}

//This function will increase the score displayed if answered correctly.
function increaseCorrectCount() {
	correctCount++;
	$('#correct-questions').text(correctCount);
	
}

//This function will be for submittin an answer to one of the questions.
function submitAnswer() {
	$('.main-box').on('submit', function(event) {
		event.preventDefault();
		let submission = $('input:checked');
		let answer = submission.val();
		let correctAnswer = answerKey[questionCount];
		if (answer === correctAnswer) {
			return answerCorrect();
		}
		else {
			return answerIncorrect();
		}
	});
}

//This function will be for when a user answers a question correctly.
function answerCorrect() {
	increaseCorrectCount();
 	$('form').remove();
 	$('.main-box').append(correctFeedback());
}

//This function will be for when a user answers a question incorrectly.
function answerIncorrect() {
	$('form').remove();
 	$('.main-box').append(incorrectFeedback());

}

//This function will be to move on to the next question in the quiz after the feedback screen.
function nextQuestion() {
	$('.main-box').on('click', '.nextButton', function(event) {
		let totalQuestions = (quizQuestions.length)-1;
		if (questionCount < totalQuestions) {
		increaseQuestionCount();
		$('.feedback').remove();
		$('.main-box').append(questionFormat());
		}
		else {
			$('.feedback').remove();
			$('.main-box').append(quizResults());
		}
		console.log(questionCount);
	});
}

//This function is for the end of the quiz to display the total results.
function quizResults() {
	let results = `
	<div class="results">
		<h1>The results are in! You answered<span id="correct-questions"> ${correctCount}</span> right!</h1>
		<button value="Refresh Page" onClick="window.location.reload();">Try Again?</button>
	</div>`;
	return results;
}

function renderQuiz() {
	beginQuiz();
	submitAnswer();
	nextQuestion();
	quizResults();
}

renderQuiz();