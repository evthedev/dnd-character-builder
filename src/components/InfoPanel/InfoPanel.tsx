import React, { Fragment, useEffect } from 'react';

import { Typography, Card, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../interfaces/interfaces';
import { AliwangwangOutlined } from '@ant-design/icons';
import { SpellsPanel } from '../SpellsPanel/SpellsPanel';
import { clearClassSpells, loadClassSpells } from '../../store/actions';

const { Title } = Typography;

export const InfoPanel: React.FC = React.memo((): JSX.Element => {
	const dispatch = useDispatch();
	const selectedCharacter = useSelector((state: IState) => state.selectedCharacter)
	const selectedClassSpells = useSelector((state: IState) => state.selectedClassSpells)
	const selectedSubclassSpells = useSelector((state: IState) => state.selectedSubclassSpells)

	useEffect(() => {
		dispatch(loadClassSpells(selectedCharacter));
		return () => {
			dispatch(clearClassSpells())
		}
	}, [selectedCharacter])
	
	return (
		<Fragment>
			<Space direction="vertical" style={{ width: '100%' }}>
				{ selectedCharacter &&
					<Card size="small" title="Your selected character" style={{ width: '100%' }}>
						<Title level={4}><AliwangwangOutlined /> {selectedCharacter.name}</Title>
						{ selectedCharacter.desc &&
							<Title level={5}>{selectedCharacter.desc}</Title>
						}
						{ selectedClassSpells && selectedClassSpells.length > 0 &&
							<SpellsPanel spells={selectedClassSpells} title='Class Spells' />
						}	
						{ selectedSubclassSpells && selectedSubclassSpells.length > 0 &&
							<SpellsPanel spells={selectedSubclassSpells} title='SubClass Spells' />
						}	
					</Card>
				}

			</Space>		
		</Fragment>
	)
})