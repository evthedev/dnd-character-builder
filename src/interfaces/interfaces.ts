import { SELECT_TYPE } from "../common/constants"

export type ISelectType= SELECT_TYPE.Class | SELECT_TYPE.Subclass | null

export interface IGenericEntity {
	index: string;
	name: string
}

export interface IAntSelectEvent {
	value: string;
	label: string;
	key: string
}

export interface ICharacter extends IGenericEntity {
	desc: string[]
}

export interface ISpellsPanelProps {
	spells: IGenericEntity[];
	title: string;
}

export interface IState {
	selectType: ISelectType;
	characterClasses: ICharacter[];
	characterSubclasses: ICharacter[];
	selectedCharacter: any; // needs typing
	selectedClassSpells: IGenericEntity[];
	selectedSubclassSpells: IGenericEntity[];
	selectedSubclassLevel: IGenericEntity | null;
	selectedSubclassLevelSpells: IGenericEntity[];
}