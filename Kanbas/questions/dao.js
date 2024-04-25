import model from "./model.js";
export const createQuestion = (quiz, question) => {
  question.id = "QU" + new Date().getTime().toString();
  question.quizId = quiz;
  return model.create(question);
};
export const findAllQuestions = () => model.find();
export const findQuestionByQuiz = (quiz) => model.find({ quizId: quiz });
export const updateQuestion = async (questionId, question) => {
  try {
    console.log(question);
    console.log("why are you not working bruh?");
    const result = await model.updateOne(
      { id: questionId },
      { $set: question }
    );
    console.log(result);
  } catch (error) {
    console.error("Error updating question:", error);
    // throw error;
  }
};
export const deleteQuestion = (questionId) => {
  const status = model.findOneAndDelete({ id: questionId });
  return status;
};
export const findQuestion = async (questionId) =>
  await model.findOne({ id: questionId });
