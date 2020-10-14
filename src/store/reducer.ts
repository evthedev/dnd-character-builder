import { defaultState } from '../common/defaults';
import { IState } from '../interfaces/interfaces';
import { SET_SELECT_TYPE, SET_CLASSES, SET_SUBCLASSES, SET_SELECTED_CHARACTER, CLEAR_SELECTED_CHARACTER, actionTypes, SET_SELECTED_CLASS_SPELLS } from './constants';

export const reducer = (state: IState = defaultState, action: actionTypes): IState => {
	switch (action.type) {
		case SET_SELECT_TYPE:
			return {
				...state,
				selectType: action.payload
			}
		case SET_CLASSES:
			return {
				...state,
				characterClasses: action.payload
			}
		case SET_SUBCLASSES:
			return {
				...state,
				characterSubclasses: action.payload
			}
		case SET_SELECTED_CHARACTER:
			return {
				...state,
				selectedCharacter: action.payload
			}
		case CLEAR_SELECTED_CHARACTER:
			return {
				...state,
				selectedCharacter: null
			}
		case SET_SELECTED_CLASS_SPELLS:
			return {
				...state,
				selectedClassSpells: action.payload
			}
		default:
			return state		
	}
}


// selectionType: ISelectType | null,
// 	characterClasses: string[],
// 	characterSubclasses: string[],
// 	selectedCharacterClassOrSubclass: IClassOrSubclass | {},
// 	selectedClassSpells: IGenericEntity[],
// 	selectedSubclassSpells: IGenericEntity[],
// 	selectedSubclassLevel: IGenericEntity | {},
// 	selectedSubclassLevelSpells