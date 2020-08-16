import React, { createContext } from "react"
import { firestore, firebaseAuth } from "./../firestore/firestore.service";
import {QuestionStore} from './question.store'
import { CategoryStore } from "./category.store";
import { QuizStore } from "./quiz.store";
import { observable } from "mobx";
import { ViewStore} from './view.store'
import firebase from "firebase";
import { Collection } from "../interfaces/collection.interface";



const viewStore = ViewStore()
const questionStore = QuestionStore()
const categoryStore = CategoryStore()
const quizStore = QuizStore(questionStore)




const userInfo = observable({
  isAuthenticated: false
})
var provider = new firebase.auth.FacebookAuthProvider();
console.log('NODE_ENV :>> ', process.env.NODE_ENV);
console.log('NODE_ENV2 :>> ', process.env);
console.log('NODE_ENV3 :>> ', process.env.IS_DEMO);
firebaseAuth.onAuthStateChanged(user => {
  console.log('u :>> ', user);
  userInfo.isAuthenticated = !!user
  if(!user){
    firebaseAuth.signInWithPopup(provider)
  }
  else{
    questionStore.setCollection(firestore.collection('Users').doc(user.uid).collection('Questions'))
    categoryStore.setCollection(firestore.collection('Users').doc(user.uid).collection('Categories'))
  }
})

const PersonalQuizContext = createContext({questionStore, categoryStore, quizStore, viewStore, userInfo})


function PersonalQuiz_Store_Provider({children}){
  return (
    <PersonalQuizContext.Provider value={{questionStore, categoryStore, quizStore, viewStore, userInfo}}>
      {children}
    </PersonalQuizContext.Provider>
    
  )
}

export {PersonalQuiz_Store_Provider, PersonalQuizContext}