const Question1 = {
  text: "What color is water?",
  correctAnswer: "Blue",
  incorrectChoices: ["Yellow", "Red", "Orange"],
  getChoices() {
    choices = this.incorrectChoices;
    choices.push(this.correctAnswer);
    return choices;
  },
};
const Question2 = {
  text: "What color is moss?",
  correctAnswer: "Moss Green",
  incorrectChoices: ["Yellow", "Blue", "Orange"],
  getChoices() {
    choices = this.incorrectChoices;
    choices.push(this.correctAnswer);
    return choices;
  },
};
