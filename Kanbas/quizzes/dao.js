import model from "./model.js";
export const createQuiz = (course, quiz) => {
  quiz.id = "Q" + new Date().getTime().toString();
  quiz.course = course;
  return model.create(quiz);
};
export const findAllQuizzes = () => model.find();
export const findQuizzesByCourse = (courseId) =>
  model.find({ course: courseId });
export const updateQuiz = (quizId, quiz) =>
  model.updateOne({ id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => {
  const status = model.findOneAndDelete({ id: quizId });
  return status;
};
export const updatePublished = (quizId, published) =>
  model.updateOne({ id: quizId }, { $set: { published } });
