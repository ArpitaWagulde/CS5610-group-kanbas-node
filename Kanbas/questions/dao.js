import model from "./model.js";
export const createQuestion = (quiz, question) => {
  question.id = "QU" + new Date().getTime().toString();
  question.quizId = quiz;
  return model.create(question);
};
export const findAllQuestions = () => model.find();
export const findQuestionByQuiz = (quiz) => model.find({ quizId: quiz });
export const updateQuestion = (questionId, question) =>
  model.updateOne({ id: questionId }, { $set: question });
export const deleteQuestion = (questionId) => {
  const status = model.findOneAndDelete({ id: questionId });
  return status;
};
