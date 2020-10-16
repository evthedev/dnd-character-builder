import { IGenericEntity } from "../../interfaces/interfaces";

export const getUniqueArray = (array: IGenericEntity[]) => {
	const uniqueArray = [];
	const map = new Map();
	for (const item of array) {
		if(!map.has(item.index)){
			map.set(item.index, true);
			uniqueArray.push({
				index: item.index,
				name: item.name
			});
		}
	}
	return uniqueArray;
}