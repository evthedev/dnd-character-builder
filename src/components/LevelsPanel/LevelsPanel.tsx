import React, { Fragment, useState } from 'react';

import { Select, Card, Space } from 'antd';
import { selectTypes, SELECT_TYPE } from '../../common/constants';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedCharacter, fetchClassesFromApi, fetchSubclassesFromApi, loadSelectedCharacter, setSelectType } from '../../store/actions';
import { IAntSelectEvent, IState, IGenericEntity } from '../../interfaces/interfaces';
import { SpellsPanel } from '../SpellsPanel/SpellsPanel';

const { Option } = Select;

export const LevelsPanel: React.FC = React.memo((): JSX.Element => {
	const dispatch = useDispatch();

	const [selectedLevel, setSelectedLevel] = useState<string>('');
	const [availableSpells, setAvailableSpells] = useState<IGenericEntity[]>([]);

	const selectType = useSelector((state: IState) => state.selectType)
	const classes = useSelector((state: IState) => state.characterClasses)
	const subclasses = useSelector((state: IState) => state.characterSubclasses)

	const selectedCharacter = useSelector((state: IState) => state.selectedCharacter)
	const selectedClassSpells = useSelector((state: IState) => state.selectedClassSpells)
	const selectedSubclassSpells = useSelector((state: IState) => state.selectedSubclassSpells)

	const subclassLevels = selectedCharacter && selectedCharacter.spells && selectedCharacter.spells.map((item:any) => ({index: item.prerequisites[0].index, name: item.prerequisites[0].name})) || []
	// console.log('selectedCharacter.spells', selectedCharacter.spells);

	const handleChange = (selectedLevel: IAntSelectEvent): void => {
		setSelectedLevel(selectedLevel.value);

		const selectedLevelValue = selectedLevel.value;
		const filteredSpells:IGenericEntity[] = [];

		console.log('subclassLevels', subclassLevels);
		
		for (let i = 0; i < selectedCharacter.spells.length; i++) {
			if (parseInt(selectedCharacter.spells[i].prerequisites[0].index.split('-')[1]) <= parseInt(selectedLevel.value.split('-')[1])) { // this makes a whole bunch of assumptions which will be explained 
				filteredSpells.push(selectedCharacter.spells[i].spell);
			}
		}

		setAvailableSpells(filteredSpells)
	}


	return (
		<Fragment>
			{ selectedCharacter && selectType === SELECT_TYPE.Subclass &&
				<Space direction="vertical" style={{ width: '100%' }}>
					<Card size="small" title="Select Subclass Level" style={{ width: '100%' }}>
						<Select style={{ width: '100%' }} labelInValue={true} onChange={handleChange}>
							{ subclassLevels.map((item: IGenericEntity) => (
								<Option value={item.index} key={item.index}>{ item.name }</Option>
							)) }
						</Select>
					</Card>
				</Space>	
			}
			{ availableSpells &&
				<SpellsPanel spells={availableSpells} title='Available Spells' />
			}
		</Fragment>
	)
})