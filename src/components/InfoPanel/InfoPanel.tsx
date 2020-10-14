import React, { Fragment } from 'react';

import { Typography, Card, Space } from 'antd';
import { useSelector } from 'react-redux';
import { IState } from '../../interfaces/interfaces';
import { AliwangwangOutlined } from '@ant-design/icons';
import { SpellsPanel } from '../SpellsPanel/SpellsPanel';

const { Title } = Typography;

export const InfoPanel: React.FC = React.memo((): JSX.Element => {
	const selectedCharacter = useSelector((state: IState) => state.selectedCharacter)

	return (
		<Fragment>
			<Space direction="vertical" style={{ width: '100%' }}>
				{ selectedCharacter &&
					<Card size="small" title="Your selected character" style={{ width: '100%' }}>
						<Title level={4}><AliwangwangOutlined /> {selectedCharacter.name}</Title>
						{ selectedCharacter.desc &&
							<Title level={5}>{selectedCharacter.desc}</Title>
						}						
						<SpellsPanel selectedCharacter={selectedCharacter}/>
					</Card>
				}

			</Space>		
		</Fragment>
	)
})