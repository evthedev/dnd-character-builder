import React, { Fragment, useEffect } from 'react';

import { Typography, Card, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../interfaces/interfaces';
import { AliwangwangOutlined } from '@ant-design/icons';
import { SpellsPanel } from '../SpellsPanel/SpellsPanel';
import { clearSpells, loadClassSpells } from '../../store/actions';
import { SELECT_TYPE } from '../../common/constants';

const { Title } = Typography;

export const InfoPanel: React.FC = React.memo((): JSX.Element => {
	const dispatch = useDispatch();
	const selectType = useSelector((state: IState) => state.selectType)
	const selectedCharacter = useSelector((state: IState) => state.selectedCharacter)
	const selectedClassSpells = useSelector((state: IState) => state.selectedClassSpells)
	const selectedSubclassSpells = useSelector((state: IState) => state.selectedSubclassSpells)

	useEffect(() => {
		dispatch(loadClassSpells(selectedCharacter));
		return () => {
			dispatch(clearSpells())
		}
	}, [selectedCharacter])
	
	return (
		<Space direction="vertical" style={{ width: '100%' }}>
			{ selectedCharacter &&
				<Card size="small" title="Your selected character" style={{ width: '100%' }}>
					<Title level={4}><AliwangwangOutlined /> {selectedCharacter.name}</Title>
					{ selectedCharacter.desc &&
						<Title level={5}>{selectedCharacter.desc}</Title>
					}
					{ selectedClassSpells &&
						<SpellsPanel spells={selectedClassSpells} title='Class Spells' />
					}	
					{ selectType === SELECT_TYPE.Subclass &&
						<SpellsPanel spells={selectedSubclassSpells} title='SubClass Spells' />
					}	
				</Card>
			}

		</Space>
	)
})