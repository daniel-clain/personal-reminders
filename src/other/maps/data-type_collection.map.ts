import { DataTypes_Set } from "../sets/data-types.set"
import { Collections_Set } from "../sets/firebase-collections.set"

const dataType_collection = new Map<DataTypes_Set, Collections_Set>()
dataType_collection.set('Reminder', 'Reminders')
dataType_collection.set('Category', 'Categories')

export default dataType_collection
