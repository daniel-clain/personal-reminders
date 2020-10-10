import { Quiz_Object } from "../object-models/quiz.object"
import { chainFunctions, shuffle, random } from "./utilities.service"
import { Question_Object } from "../object-models/question.object"
import { QuestionWithRating_Object } from "../object-models/question-with-rating.object"
import { QuestionWithRandomValue_Object } from "../object-models/question-with-random-value.object"
import questionsService from "./questions.service"
import quizService from "./quiz.service"
import { Category_Object } from "../object-models/category.object"
import categoriesService from "./categories.service"






const numberOfQuestionsInQuiz = 10

export function generateQuiz(): Quiz_Object {

  return {
    questions: chainFunctions([
      f['Get all questions that match selected categories'],
      f['Give each question a selection chance rating based on its correctness rating and date since it was last asked'],
      f['Select random questions based on thier selection chance']
    ])
  }
}



function getQuestions(): Question_Object[] {
  const { questions } = questionsService
  const { selectedCategoryIds } = quizService
  let returnQuestions: Question_Object[]

  if (selectedCategoryIds.length == 0){
    returnQuestions = questions
  }
  else{
    returnQuestions = questions
    .filter(question => 
      f2['Question has a category that is an indirect sub category of any selected category'](question, selectedCategoryIds)
    )
  }

  if (returnQuestions.length == 0)
    throw ('No enough questions to make quiz')

  return returnQuestions
}




function rateQuestions(questions: Question_Object[]): QuestionWithRating_Object[] {
  //console.log(`%c questions ${questions}`, 'color: white; background: green')
  const { mostRecentDate, lastAskedDaysRange } = getLaskAskedDaysRange(questions)
  return questions.map((question: Question_Object) => {
    const lastAskedRating: number = getLastAskedRating(mostRecentDate, question.dateLastAsked, lastAskedDaysRange)

    let rating = (question.correctnessRating + lastAskedRating) / 2

    return { question, rating }
  })
}

function randomQuestions(questionsWithRating: QuestionWithRating_Object[]): Question_Object[] {
  console.log(`%c questionsWithRating`, 'color: white; background: #021562', questionsWithRating)

  const questionsWithRandomValue: QuestionWithRandomValue_Object[] = assignQuestionsRandomValue(questionsWithRating)
  console.log(`%c questionsWithRandomValue`, 'color: white; background: #740306', questionsWithRandomValue)
  const quizQuestions: Question_Object[] =
    shuffle(questionsWithRandomValue)
      .sort((a, b) => a.randomValue - b.randomValue)
      .slice(0, numberOfQuestionsInQuiz)
      .map((questionsWithRandomValue: QuestionWithRandomValue_Object) => questionsWithRandomValue.question)

  return quizQuestions
}



function getLaskAskedDaysRange(questions: Question_Object[]) {
  const datesArray = questions.map(question => question.dateLastAsked)
  const sortedDates = datesArray.sort()
  const longestAgo = sortedDates[0]
  const mostRecentDate = sortedDates[sortedDates.length - 1]
  if (!longestAgo || !mostRecentDate) {
    return {
      mostRecentDate: null,
      lastAskedDaysRange: null
    }
  }
  const diffTime = Math.abs(mostRecentDate.getTime() - longestAgo.getTime())
  const lastAskedDaysRange = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return { mostRecentDate, lastAskedDaysRange }
}

function getLastAskedRating(mostRecent: Date, questionDate: Date, dayRange: number): number {
  if (dayRange == 0 || dayRange == null)
    return 10
  const diffTime = Math.abs(mostRecent.getTime() - questionDate.getTime())
  const lastAskedDaysSinceMostRecent = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  if (lastAskedDaysSinceMostRecent == 0)
    return 10
  return Math.round(10 - lastAskedDaysSinceMostRecent / dayRange * 10)
}

function assignQuestionsRandomValue(questionsWithRating: QuestionWithRating_Object[]): QuestionWithRandomValue_Object[] {
  return questionsWithRating.map(questionWithRating => {
    const { rating, question } = questionWithRating
    const randomValue = Math.round(rating * random())
    const questionWithRandomValue: QuestionWithRandomValue_Object = { question, randomValue }
    return questionWithRandomValue
  })
}



var f = {
  'Get all questions that match selected categories': getQuestions,
  'Give each question a selection chance rating based on its correctness rating and date since it was last asked': rateQuestions,
  'Select random questions based on thier selection chance': randomQuestions
}


const f2 = {
  "Question has a category that is an indirect sub category of any selected category": (question: Question_Object, selectedCategoryIds: string[]): boolean => {

    return recursive(question.categoryIds, selectedCategoryIds)

    function recursive(q_c_ids, c_ids){
      
      const matchFound = f2["Array of category IDs includes question's category"](c_ids, q_c_ids)    

      if(matchFound) return true


      for(const c_id of c_ids){
        const childIds = f2["Get category ID's children category IDs"](c_id)
        if(childIds){
          const matchFound = recursive(q_c_ids, childIds)    
          if(matchFound) return true
        }
      }

    }
  },


  "Get category ID's children category IDs":
  categoryId => 
    categoriesService.categories.find
    (category => category.id == categoryId)
    ?.childCategoryIds
  ,

  "Array of category IDs includes question's category":
  (categoryIds: string[], questionCategoryIds: string[]): boolean => 
    questionCategoryIds.some
    (q_c_id => categoryIds.includes(q_c_id))
}

