import React, { useEffect } from 'react';

import { Typography, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { clearClassSpells, loadClassSpells } from '../../store/actions';
import { ISpellsPanelProps, IState } from '../../interfaces/interfaces';

const { Title, Paragraph } = Typography;

export const SpellsPanel: React.FC<ISpellsPanelProps> = (props): JSX.Element => {
	const dispatch = useDispatch();

	const selectedClassSpells = useSelector((state: IState) => state.selectedClassSpells)

	useEffect(() => {
		dispatch(loadClassSpells(props.selectedCharacter));
		return () => {
			dispatch(clearClassSpells())
		}
	}, [props.selectedCharacter])

	return (
		<Row gutter={{ xs: 8, sm: 16 }}>
			<Col span={24}>
				<Title level={4}>Class Spells</Title>
				{ selectedClassSpells.length > 0 ?
					<Row gutter={{ xs: 8, sm: 16 }}>
						{ selectedClassSpells.map(item => (
							<Col span={12}>
								<Paragraph key={ item.index }>{ item.name }</Paragraph>
							</Col>
						))
						}
					</Row>
					:
					<Paragraph>No spells found</Paragraph>
				}
			</Col>
			<Col xs={{span: 24}} sm={{span: 12}}>
				
			</Col>
		</Row>
	)
}