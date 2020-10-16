import { SET_CLASSES, SET_SELECTED_CHARACTER, SET_SELECT_TYPE, SET_SUBCLASSES, actionTypes, CLEAR_SELECTED_CHARACTER, SET_SELECTED_CLASS_SPELLS, SET_SELECTED_SUBCLASS_SPELLS } from "./constants";
import { ISelectType, IGenericEntity, ICharacter, IAntSelectEvent } from '../interfaces/interfaces';
import { Dispatch } from "redux";
import { API_ENDPOINT_CLASSES, API_ENDPOINT_SUBCLASSES, API_ENDPOINT_BASE } from '../common/constants';

export const setSelectType = (selectType: ISelectType): actionTypes => ({
	type: SET_SELECT_TYPE,
	payload: selectType
})

export const setClasses = (classes: ICharacter[]): actionTypes => ({
	type: SET_CLASSES,
	payload: classes
})

export const setSubclasses = (subclasses: ICharacter[]): actionTypes => ({
	type: SET_SUBCLASSES,
	payload: subclasses
})

export const setSelectedCharacter = (selectedCharacter: ICharacter): actionTypes => ({
	type: SET_SELECTED_CHARACTER,
	payload: selectedCharacter
})

export const clearSelectedCharacter = (): actionTypes => ({
	type: CLEAR_SELECTED_CHARACTER,
})

export const setSelectedClassSpells = (results: IGenericEntity[]): actionTypes => ({
	type: SET_SELECTED_CLASS_SPELLS,
	payload: results
})

export const setSelectedSubclassSpells = (results: IGenericEntity[]): actionTypes => ({
	type: SET_SELECTED_SUBCLASS_SPELLS,
	payload: results
})

export const fetchClassesFromApi = () => (
	async (dispatch: Dispatch) => {
		const response = await fetch(API_ENDPOINT_CLASSES, {
			method: 'GET'
		});
		const classesResponse = await response.json();
		dispatch(setClasses(classesResponse.results));
	}
)

export const fetchSubclassesFromApi = () => (
	async (dispatch: Dispatch) => {
		const response = await fetch(API_ENDPOINT_SUBCLASSES, {
			method: 'GET'
		});
		const subclassesResponse = await response.json();
		dispatch(setSubclasses(subclassesResponse.results));
	}
)

export const loadSelectedCharacter = (selected: IAntSelectEvent) => (
	async (dispatch: Dispatch) => {
		const response = await fetch(API_ENDPOINT_BASE + selected.value, {
			method: 'GET'
		});
		const responseJson = await response.json();
		return dispatch(setSelectedCharacter(responseJson))
	}
)

export const loadClassSpells = (selectedCharacter: any) => (
	async (dispatch: Dispatch) => {
		if (selectedCharacter && selectedCharacter.spells) {

			if (typeof selectedCharacter.spells === 'string') { // selected character is class
				const response = await fetch(API_ENDPOINT_BASE + selectedCharacter.spells, {
					method: 'GET'
				});
				const responseJson = await response.json();
				// some spell sets seem to have duplicates
				// const uniqueResults = responseJson.results.filter((value:any, index: number, self:any) => self.indexOf(value) === index);
				dispatch(setSelectedClassSpells(responseJson.results))

			} else { // selected character is subclass
				const response = await fetch(API_ENDPOINT_BASE + selectedCharacter.class.url + '/spells', {
					method: 'GET'
				});
				const responseJson = await response.json();
				dispatch(setSelectedClassSpells(responseJson.results))

				const spellMapper = selectedCharacter.spells.map((item: any) => item.spell)
				dispatch(setSelectedSubclassSpells(spellMapper))
			}
		}
	}
)

export const clearSpells = () => (
	async (dispatch: Dispatch) => {
		dispatch(setSelectedClassSpells([]))
		dispatch(setSelectedSubclassSpells([]))
	}
)
