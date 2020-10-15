import React, { Fragment } from 'react';

import { Select, Card, Space } from 'antd';
import { selectTypes, SELECT_TYPE } from '../../common/constants';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedCharacter, fetchClassesFromApi, fetchSubclassesFromApi, loadSelectedCharacter, setSelectType } from '../../store/actions';
import { IAntSelectEvent, IState } from '../../interfaces/interfaces';

const { Option } = Select;

export const SelectPanel: React.FC = React.memo((): JSX.Element => {
	const dispatch = useDispatch();

	const selectType = useSelector((state: IState) => state.selectType)
	const classes = useSelector((state: IState) => state.characterClasses)
	const subclasses = useSelector((state: IState) => state.characterSubclasses)

	const handleChange = (selectedType: any): void => {
		const selectedTypeValue = selectedType.value;
		dispatch(setSelectType(selectedTypeValue));
		dispatch(clearSelectedCharacter());
		if (selectedTypeValue === SELECT_TYPE.Class && classes.length === 0) {
			dispatch(fetchClassesFromApi());
		} else if (selectedTypeValue === SELECT_TYPE.Subclass && subclasses.length === 0) {
			dispatch(fetchSubclassesFromApi());
		}
	}

	const handleCharacterSelect = (selected: IAntSelectEvent) => {
		dispatch(loadSelectedCharacter(selected)); 
	}

	return (
		<Fragment>
			<Space direction="vertical" style={{ width: '100%' }}>
				<Card size="small" title="Select Character Type" style={{ width: '100%' }}>
					<Select style={{ width: '100%' }} labelInValue={true} onChange={handleChange}>
						{ selectTypes.map((item: any) => (
							<Option value={item} key={item}>{ item }</Option>
						)) }
					</Select>
				</Card>
			</Space>			
			{ selectType &&
				<Space direction="vertical" style={{ width: '100%' }}>
					<Card size="small" title={'Select ' + selectType} style={{ width: '100%' }}>
						<Select style={{ width: '100%' }} labelInValue={true} onChange={handleCharacterSelect}>
						{ selectType as SELECT_TYPE === SELECT_TYPE.Class &&
							(classes).map((item: any) => (
								<Option value={item.url} key={item.index}>{ item.name }</Option>
							))
						}
						{ selectType as SELECT_TYPE === SELECT_TYPE.Subclass &&
							(subclasses).map((item: any) => (
								<Option value={item.url} key={item.index}>{ item.name }</Option>
							))
						}
						</Select>
					</Card>
				</Space>
			}
		</Fragment>
	)
})