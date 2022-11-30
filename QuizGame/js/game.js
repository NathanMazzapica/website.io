//VARIABLES
const BODY = document.body;
const QUIZ_DIV = document.createElement("div");
QUIZ_DIV.setAttribute("id", "quiz-background");

const ANSWER_DIV = document.createElement("div");
ANSWER_DIV.setAttribute("id", "answer-container");
const ANSWER_FORM = document.createElement("form");

const QUESTION_TEXT = document.createElement("h1");

const SUBMIT_BUTTON = document.createElement("button");

let questions = [Question1, Question2];
let answerButtons = []; //initialize radio button array
let answerLabels = []; //initialize answer labels array
let cur_qIndex = 0; // current question index
let cur_q = questions[cur_qIndex]; // current question object

function DisplayQuestion() {
  choices = cur_q.getChoices();
  changeQuestionText(cur_q.text);

  for (i = 0; i < answerButtons.length; i++) { // update button & label values
    changeRadioButtonValue(answerButtons[i], choices[i]);
    changeLabelText(answerLabels[i], choices[i]);
  }
}

function nextQuestion() {
  clearButtons();
  cur_qIndex++;
  cur_q = questions[cur_qIndex];
  DisplayQuestion();
}

function changeQuestionText(text) {
  QUESTION_TEXT.innerText = text;
}

function changeRadioButtonValue(btn, val) {
  btn.setAttribute("value", val);
}

function clearButtons() { // unchecks the radio buttons when moving to next question
  answerButtons.forEach((element) => (element.checked = false));
}

function changeLabelText(label, text) {
  label.innerText = text;
}

function InitHTML() {
  initRadioButtons();
  initLabels();
  initForm();
  initSubmit();

  QUIZ_DIV.append(QUESTION_TEXT);
  ANSWER_DIV.append(ANSWER_FORM);
  QUIZ_DIV.append(ANSWER_DIV);

  BODY.append(QUIZ_DIV);
}

function initSubmit() {
  SUBMIT_BUTTON.innerText = "Submit";
  SUBMIT_BUTTON.setAttribute("type", "button");
  SUBMIT_BUTTON.addEventListener("click", () => checkAnswer());
}

function initRadioButtons() {
  for (i = 0; i < 4; i++) {
    radioButt = document.createElement("input");
    radioButt.setAttribute("id", "choice-" + i);
    radioButt.setAttribute("type", "radio");
    radioButt.setAttribute("name", "answerButton");
    answerButtons.push(radioButt);
  }
}

function initLabels() {
  for (i = 0; i < answerButtons.length; i++) {
    label = document.createElement("label");
    label.setAttribute("for", "choice-" + i);
    label.innerText = i + 1;
    answerLabels.push(label);
  }
}

function initForm() {
  for (i = 0; i < answerButtons.length; i++) {
    ANSWER_FORM.append(answerButtons[i]);
    ANSWER_FORM.append(answerLabels[i]);
    ANSWER_FORM.append(document.createElement("br"));
  }
  ANSWER_FORM.append(document.createElement("br"));
  ANSWER_FORM.append(SUBMIT_BUTTON);
}

function checkAnswer() {
  let isCorrect = false;
  let finalAnswers = ANSWER_FORM.elements.answerButton;

  finalAnswers.forEach((element) => {
    let val = element.value;
    let selected = element.checked;
    if (val == cur_q.correctAnswer && selected) {
      isCorrect = true;
    }
  });
  if (isCorrect) {
    alert("Correct! Good job.");
    if (cur_qIndex + 1 > questions.length - 1) {
      alert("Quiz over, leave.");
      return;
    }
    nextQuestion();
  } else alert("Wrong. Try again.");
}

InitHTML();
DisplayQuestion();
