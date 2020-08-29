
import { SubmittedQuestion_Type } from '../types/submitted-question.type'
import 'firebase/firestore'
import { SubmittedCategory_Type } from '../types/submitted-category.type'
import userStore from '../stores/user.store'
import { Data } from '../interfaces/data.interface'
import { Collections_Set } from '../sets/collections.set'
import { observable, when } from 'mobx'
import environmentService from './environment.service'

import {QuerySnapshot, DocumentData} from 'firestore'
import firebase from 'firebase/app'

const {requiresAuthentication} = environmentService.environment


export default observable({
  add,
  update,
  deleteData,
  data$
})


function data$<T extends Data>(collectionName: Collections_Set, receiveDataFunc: (data: T[]) => void) {
  
  if(requiresAuthentication){  
    when(() => !!userStore.userDoc, () => {  
      userStore.userDoc.collection(collectionName).onSnapshot({
        next: (snapshot: QuerySnapshot<DocumentData>) =>
          receiveDataFunc(snapshot.docs.map(doc => <T>({ ...doc.data(), id: doc.id })))
      })
    })
  }
  else{
    firebase.firestore().collection(collectionName).onSnapshot({
      next: (snapshot: QuerySnapshot<DocumentData>) =>
        receiveDataFunc(snapshot.docs.map(doc => <T>({ ...doc.data(), id: doc.id })))
    })
  }
}

function getCollection(collectionName: Collections_Set){  
  if(requiresAuthentication){ 
    return userStore.userDoc.collection(collectionName)
  } 
  else {
    return firebase.firestore().collection(collectionName)
  }
}

function add<T extends Data>(collectionName: Collections_Set, data: T) {
  return getCollection(collectionName).add(data)
}

function update<T extends Data>(collectionName: Collections_Set, data: T) {
  const { id, ...rest } = data
  return getCollection(collectionName).doc(id).update({ ...rest, dateLastUpdated: new Date() })
}

function deleteData(collectionName: Collections_Set, id: string) {
  return getCollection(collectionName).doc(id).delete()
}


function validateQuestion({ value, correctAnswer }: SubmittedQuestion_Type) {
  const validationErrors = []
  if (!value) validationErrors.push('requires question')
  if (!correctAnswer) validationErrors.push('requires answer')
  if (validationErrors.length > 0) throw (`Failed to validate: ${validationErrors}`)
}
function validateCategory({ value }: SubmittedCategory_Type) {
  const validationErrors = []
  if (!value) validationErrors.push('requires category name')
  if (validationErrors.length > 0) throw (`Failed to validate: ${validationErrors}`)
}
