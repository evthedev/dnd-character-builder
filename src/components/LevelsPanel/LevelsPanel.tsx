import React, { useEffect, useState } from 'react';

import { Select, Card, Space } from 'antd';
import { SELECT_TYPE } from '../../common/constants';
import { useSelector } from 'react-redux';
import { IAntSelectEvent, IState, IGenericEntity } from '../../interfaces/interfaces';
import { SpellsPanel } from '../SpellsPanel/SpellsPanel';
import { getUniqueArray } from '../helpers/getUniqueArray';

const { Option } = Select;

export const LevelsPanel: React.FC = React.memo((): JSX.Element => {

	const [selectedLevel, setSelectedLevel] = useState<string>('');
	const [availableSpells, setAvailableSpells] = useState<IGenericEntity[]>([]);

	const selectType = useSelector((state: IState) => state.selectType)
	const selectedCharacter = useSelector((state: IState) => state.selectedCharacter)
	const subclassLevels = (selectedCharacter && selectedCharacter.spells && selectedCharacter.spells.map((item:any) => ({index: item.prerequisites[0].index, name: item.prerequisites[0].name}))) || []

	const uniqueSubclassLevels = getUniqueArray(subclassLevels);	

	useEffect(() => {
		setAvailableSpells([])
	}, [selectedCharacter])

	const handleChange = (selectedLevel: IAntSelectEvent): void => {
		setSelectedLevel(selectedLevel.value);

		const filteredSpells:IGenericEntity[] = [];
		
		for (let i = 0; i < selectedCharacter.spells.length; i++) {
			if (parseInt(selectedCharacter.spells[i].prerequisites[0].index.split('-')[1]) <= parseInt(selectedLevel.value.split('-')[1])) { // this makes a whole bunch of assumptions which will be explained 
				filteredSpells.push(selectedCharacter.spells[i].spell);
			}
		}
		const uniqueFilteredSpells = getUniqueArray(filteredSpells);
		setAvailableSpells(uniqueFilteredSpells)
	}


	return (
		<Space direction="vertical" style={{ width: '100%' }}>
			{ selectedCharacter && selectType === SELECT_TYPE.Subclass && uniqueSubclassLevels.length > 0 &&
				<Card size="small" title="Select Subclass Level" style={{ width: '100%' }}>
					<Select style={{ width: '100%' }} labelInValue={true} onChange={handleChange}>
						{ uniqueSubclassLevels.map((item: any) => (
							<Option value={item.index} key={item.index}>{ item.name }</Option>
						)) }
					</Select>
					<SpellsPanel spells={availableSpells} title='Available Spells' />
				</Card>
			}
		</Space>
	)
})