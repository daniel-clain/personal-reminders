import React from 'react'
import { QuestionFields } from '../views/question-management/question-management-components/QuestionForm.sub'
import { observer } from 'mobx-react'
import { Category_Type } from '../../other/types/category.type'
import { CategoryFields } from '../views/question-management/question-management-components/category-management/category-management-components/CategoryForm.sub'
import CategorySelector_Partial from './CategorySelector.partial'

type FormFieldTypes = 'input' | 'textarea' | 'category selector'
type FieldNames = QuestionFields | CategoryFields

interface FormFieldProps_Interface {
	name: string
	type: FormFieldTypes
	objKey?: any
	readOnly?: boolean
	onUpdate?(name: string | string[], value: any)
	value?: string | string[]
}

function FormField({ name, objKey, type, onUpdate, value, readOnly }: FormFieldProps_Interface) {
	function getFieldType() {

		let inputProps = { value, readOnly, onChange: onUpdate ? (e) => onUpdate(e.target.value, objKey) : undefined
		}
			
		switch (type) {
			case 'input':
				return (
					<input
						className="field__input"
						{...inputProps}
					/>
				)
			case 'textarea':
				return (
					<textarea
						className="field__text-area"
						{...inputProps}
					/>
				)
			case 'category selector':
				return (
					<div className="field__categories">
						<CategorySelector_Partial
							{...{
								selectedCategoryIds: value as string[],
								categorySelected
							}}
						/>
					</div>
				)
		}
	}

	return (
		<div className="field">
			<span className="field__name">{name}: </span>
			{getFieldType()}
		</div>
	)

	function categorySelected(selectedCategory: Category_Type) {
		const categoryIds = value as string[]
		const categoryIndex = categoryIds?.findIndex((id) => id == selectedCategory.id)

		const categoryIsAlreadySelected = categoryIndex >= 0
		if (categoryIsAlreadySelected) {
			categoryIds.splice(categoryIndex, 1)
			onUpdate(categoryIds, objKey)
		} else {
			categoryIds.push(selectedCategory.id)
			onUpdate(categoryIds, objKey)
		}
	}
}
export default observer(FormField)
