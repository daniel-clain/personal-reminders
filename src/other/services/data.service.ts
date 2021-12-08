
import { SubmittedReminder_Object } from '../object-models/submitted-reminder.object'
import 'firebase/firestore'
import { SubmittedCategory_Object } from '../object-models/submitted-category.object'
import { observable, when } from 'mobx'
import environmentService from './environment.service'

import {QuerySnapshot, DocumentData} from 'firestore'
import firebase from 'firebase/app'
import Data_Object from '../object-models/data.object'
import { DataTypes_Set } from '../sets/data-types.set'
import dataType_collection from '../maps/data-type_collection.map'
import { DataObjects_Set } from '../sets/data-objects.set'
import { Collections_Set } from '../sets/firebase-collections.set'
import { app } from '../../components/app'

const {requiresAuthentication} = environmentService.environment


export default observable({
  add,
  update,
  deleteData,
  data$
})

function data$<T extends Data_Object>(collectionName: Collections_Set, receiveDataFunc: (data: T[]) => void) {
  
  if(requiresAuthentication){  
    when(() => !!app.userService.userDoc, () => {  
      app.userService.userDoc.collection(collectionName).onSnapshot({
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

function getCollection(dataType: DataTypes_Set){  
  if(requiresAuthentication){ 
    return app.userService.userDoc.collection(dataType_collection.get(dataType))
  } 
  else {
    return firebase.firestore().collection(dataType_collection.get(dataType))
  }
}

function add<T extends DataObjects_Set>(dataType: DataTypes_Set, data: T): Promise<T> {
  return getCollection(dataType).add(data)
  .then(dataRef => {    
    return dataRef.get().then((snapshot: QuerySnapshot<DocumentData>) => {
      return {...snapshot.data(), id: snapshot.id}
    })
  })
}

function update<T extends Data_Object>(collectionName: DataTypes_Set, data: T) {
  const { id, ...rest } = data
  return getCollection(collectionName).doc(id).update({ ...rest, dateLastUpdated: new Date() })
}

function deleteData(collectionName: DataTypes_Set, data: Data_Object) {
  return getCollection(collectionName).doc(data.id).delete()
}


function validateReminder({ value }: SubmittedReminder_Object) {
  const validationErrors = []
  if (!value) validationErrors.push('requires reminder')
  if (validationErrors.length > 0) throw (`Failed to validate: ${validationErrors}`)
}
function validateCategory({ value }: SubmittedCategory_Object) {
  const validationErrors = []
  if (!value) validationErrors.push('requires category name')
  if (validationErrors.length > 0) throw (`Failed to validate: ${validationErrors}`)
}
