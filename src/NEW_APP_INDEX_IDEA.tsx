import React from 'react'
import {f,s,t,u,c} from './Dependencies'
const q = c['quiz']
const m = c['question management']

/* Why was it done this way? 

- I believe when a person goes to understand something, it should be made easy for them to know where to start
- Once they are at the start, they should get a high level complete overview that show as much of the important stuff as possible in the correct form of abstraction
- Code should be more readable, the thing that makes code less readable is too much programmy syntax, descriptive names that arent written like descriptions we see in more userfriendly mediums, like a cooking recipie or a peice of marketing or sales, its all about clarity, user ease and enjoyment. 
- at high level of code, its more about readability, on the leaf nodes of the code, it all about using the core programming tools
- abstract the complexity for easy and speed of understanding the codebase, once you understand it, you will be able to work with this app more efieciently, and you will be able to talk about how it works with others

*/




const PersonalQuizUI = (  
  u['if'](s['the selected view'],f['is'],t['quiz'],
    f['then show'](
    <main id='quiz-view'>
      <h1>Quizz</h1>
      {(
      u['if'](f['the quiz'],u['is not'],f['in progress']),
      u['then show'](
      <section id='pre-quiz-view'>
        {[
        c['category selector'],
        u['and'],
        c['start quiz button']
        ]}
      </section>
      ),              

      u['if'](f['the quiz'],u['is'],f['in progress']),                
      u['then show'](
      <section id='active-quiz-question'>
        {[
        q['question text field'],
        q['answer input text fieldb'](),

        u['if'](f['the active question'],u['is not'],f['submitted'],
          u['then show'](
          q['submit answer button']
        )),

        u['if'](f['the active question'],u['is'],f['submitted'],
          u['then show'](                        
          q['correct answer'],
          q['correctness rating buttons']
        ))
        ]}        
      </section>
      )
      )}
    </main>
  )),

  u['if'](s['the selected view'],f['is'],t['question management'],
    u['then show'](
    <main id='question-management-view'>
      <h1>Question Management</h1>
      <section id='add question form'> {[
        c['question text field'],
        c['correct answer text field'],
        c['category selecter'],
        c['submit button']
      ]}</section>
      {c['toggle']}
      {c['list or categories']}              
    </main>
  ))
)


f['react']['render'](PersonalQuizUI)