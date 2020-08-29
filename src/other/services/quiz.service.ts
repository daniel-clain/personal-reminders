/* 
  function updateQuestionCorrectnessRating(question: Question_Type, correctnessMark: CorrectnessMark_Type) {
    if(!questionCollection)throw('no question collection')
    
    let newRating
    
    if(correctnessMark == 'Correct'){
      newRating = question.correctnessRating + 1
    }
    if(correctnessMark == 'Almost'){
      newRating = question.correctnessRating + 0.5
    }
    if(correctnessMark == 'Kinda'){
      newRating = question.correctnessRating - 0.5
    }
    if(correctnessMark == 'Wrong'){
      newRating = question.correctnessRating - 1
    }

    if(newRating > 10){
      newRating = 10
    }
    if(newRating < 1){
      newRating = 1
    }

    updateQuestion({...question, correctnessRating: newRating, dateLastAsked: new Date()})

    
  } */