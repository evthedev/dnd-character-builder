export enum SELECT_TYPE {
	Class = 'class',
	Subclass = 'subclass'
}

export const selectTypes = [
	SELECT_TYPE.Class,
	SELECT_TYPE.Subclass
]
export const API_ENDPOINT_BASE = 'https://www.dnd5eapi.co';
export const API_ENDPOINT_CLASSES = API_ENDPOINT_BASE + '/api/classes';
export const API_ENDPOINT_SUBCLASSES = API_ENDPOINT_BASE + '/api/subclasses';
