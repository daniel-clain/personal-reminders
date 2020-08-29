import { Question_Type } from "../../types/question.type"
import { Quiz_Type } from "../../types/quiz.type"
import { generateQuiz } from "../../services/quiz-generator.service"

jest.mock('./utilities.service')

const mockQuestionStore = {questions: []}

let testQuestions: Question_Type[] = []


const baseQuestion: Question_Type = {
  id: 'base question',
  correctnessRating: 2,
  dateLastAsked: new Date('April 20, 2019 17:30')
} as Question_Type


let testQuestion: Question_Type, returnedQuiz: Quiz_Type

function setup(testQuestionUpdates) {

  testQuestion = { 
    ...baseQuestion, 
    ...testQuestionUpdates,
    id: 'test question', 
  }

  testQuestions = [...Array(100).fill(baseQuestion), testQuestion]
  mockQuestionStore.questions = testQuestions
  returnedQuiz = generateQuiz()
}


describe(`%s Generate Quiz
It returns a quiz with 10 random questions, the random questions selected should be based on the questions correctness rating and date since last asked, relative to the other questions.
  - random() and shuffle() always return the same value.
  - categories are irrelevant so categories will be null which means use all questions provided
`,
  () => {
    describe(`when there are 10 base questions with correctnessRating of 'Almost' and dateLastAsked is 20th April 2019`, () => {



      describe('when test question has same correctnessRating as base questions but was asked 1 day MORE recently than base questions', () => {


        beforeAll(() => {
          setup({dateLastAsked: new Date('April 21, 2019 17:30')})
        })
        afterAll(() => testQuestions = [])

        test('should return 10 questions', () =>
          expect(returnedQuiz.questions).toHaveLength(10)
        )

        test('Expect returned quiz not to contain test question', () =>
          expect(returnedQuiz.questions).not.toContain(testQuestion)
        )

      })

      describe('when test question has same correctnessRating as base questions but was asked 1 day LESS recently than base questions', () => {

        beforeAll(() => {
          setup({dateLastAsked: new Date('April 19, 2019 17:30')})          
        })

        test('returned quiz should include test question', () =>
          expect(returnedQuiz.questions).toContain(testQuestion)
        )

      })

      describe('when test question has HIGHER correctnessRating than base questions but was asked 1 day LESS recently than base questions', () => {

        beforeAll(() => {
          setup({
            dateLastAsked: new Date('April 19, 2019 17:30'),
            correctnessRating: 2
          } as Question_Type)          
        })

        test('returned quiz should include test question', () =>
          expect(returnedQuiz.questions).toContain(testQuestion)
        )

      })

    })

    describe('test with existing data', () => {

      beforeAll(() => {
        testQuestions = [...Array(100).fill(baseQuestion), testQuestion]
        mockQuestionStore.questions = testQuestions
        returnedQuiz = generateQuiz()
      })
      

      test('returned quiz should include test question', () =>
        expect(returnedQuiz.questions).toContain(testQuestion)
      )

    })



  }
)

