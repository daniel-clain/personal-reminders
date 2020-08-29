import { Quiz_Type } from "../types/quiz.type"
import { chainFunctions, shuffle, random } from "./utilities.service"
import { Question_Type } from "../types/question.type"
import { QuestionWithRating_Type } from "../types/question-with-rating.type"
import { QuestionWithRandomValue_Type } from "../types/question-with-random-value.type"
import questionStore from "../stores/question.store"



export function generateQuiz(): Quiz_Type{

  return {questions: chainFunctions({
    'Get all questions that match selected categories': getQuestions,
    'Give each question a selection chance rating based on its correctness rating and date since it was last asked': giveRating,
    'Select random questions based on thier selection chance': randomQuestions
  })}



  function getQuestions(): Question_Type[]{
    return questionStore.questions
  }

  function giveRating(questions: Question_Type[]): QuestionWithRating_Type[]{
    return rateQuestions(questions)
  }

  function randomQuestions(questionsWithRating: QuestionWithRating_Type[]): Question_Type[]{

    const questionsWithRandomValue: QuestionWithRandomValue_Type[] =  assignQuestionsRandomValue(questionsWithRating)
      console.log('questionsWithRandomValue', questionsWithRandomValue)
      const quizQuestions: Question_Type[] = 
      shuffle(questionsWithRandomValue)
      .sort((a, b) => a.randomValue - b.randomValue)
      .slice(0, 10)
      .map((questionsWithRandomValue: QuestionWithRandomValue_Type) => questionsWithRandomValue.question)

    return quizQuestions
  }


  function rateQuestions(questions: Question_Type[]): QuestionWithRating_Type[]{
    const {mostRecentDate, lastAskedDaysRange} = getLaskAskedDaysRange(questions)
    return questions.map((question: Question_Type) => {
      const lastAskedRating: number = getLastAskedRating(mostRecentDate, question.dateLastAsked, lastAskedDaysRange)

      let rating = (question.correctnessRating + lastAskedRating) / 2

      return {question, rating}
    })
  }

  function getLaskAskedDaysRange(questions: Question_Type[]){
    const datesArray = questions.map(question => question.dateLastAsked)
    const sortedDates = datesArray.sort()
    const longestAgo = sortedDates[0]
    const mostRecentDate = sortedDates[sortedDates.length - 1]
    if(!longestAgo || !mostRecentDate){
      return {
        mostRecentDate: null, 
        lastAskedDaysRange: null
      }
    }
    const diffTime = Math.abs(mostRecentDate.getTime() - longestAgo.getTime())
    const lastAskedDaysRange = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) 
    return {mostRecentDate, lastAskedDaysRange}
  }

  function getLastAskedRating(mostRecent: Date, questionDate: Date, dayRange: number): number{
    if(dayRange == 0 || dayRange == null)
      return 10
    const diffTime = Math.abs(mostRecent.getTime() - questionDate.getTime())
    const lastAskedDaysSinceMostRecent = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) 
    if(lastAskedDaysSinceMostRecent == 0)
      return 10
    return Math.round(10 - lastAskedDaysSinceMostRecent/dayRange*10)
  }

  function assignQuestionsRandomValue(questionsWithRating: QuestionWithRating_Type[]): QuestionWithRandomValue_Type[]{
    return questionsWithRating.map(questionWithRating => {
      const {rating, question} = questionWithRating
      const randomValue = Math.round(rating * random())
      const questionWithRandomValue: QuestionWithRandomValue_Type = {question, randomValue}
      return questionWithRandomValue
    })
  }

}