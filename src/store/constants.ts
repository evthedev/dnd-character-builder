import { ICharacter, ISelectType, IGenericEntity } from '../interfaces/interfaces';

export const SET_SELECT_TYPE = 'SET_SELECT_TYPE';
export const SET_CLASSES = 'SET_CLASSES';
export const SET_SUBCLASSES = 'SET_SUBCLASSES';
export const SET_SELECTED_CHARACTER = 'SET_SELECTED_CHARACTER';
export const GET_SELECTED_CHARACTER = 'GET_SELECTED_CHARACTER';
export const CLEAR_SELECTED_CHARACTER = 'CLEAR_SELECTED_CHARACTER';
export const SET_SELECTED_CLASS_SPELLS = 'SET_SELECTED_CLASS_SPELLS';
export const GET_SUBCLASSES = 'GET_SUBCLASSES';

export interface SetSelectTypeAction {
	type: typeof SET_SELECT_TYPE;
	payload: ISelectType
}

export interface SetClassesAction {
	type: typeof SET_CLASSES;
	payload: ICharacter[]
}

export interface SetSubclassesAction {
	type: typeof SET_SUBCLASSES;
	payload: ICharacter[]
}

export interface SetSelectedCharacterAction {
	type: typeof SET_SELECTED_CHARACTER;
	payload: ICharacter
}

export interface GetSelectedCharacterAction {
	type: typeof GET_SELECTED_CHARACTER;
	payload: ICharacter
}

export interface ClearSelectedCharacterAction {
	type: typeof CLEAR_SELECTED_CHARACTER;
}

export interface SetSelectedClassSpellsAction {
	type: typeof SET_SELECTED_CLASS_SPELLS;
	payload: IGenericEntity[]
}

export type actionTypes = SetSelectTypeAction | SetClassesAction | SetSubclassesAction | SetSelectedCharacterAction | GetSelectedCharacterAction | ClearSelectedCharacterAction | SetSelectedClassSpellsAction