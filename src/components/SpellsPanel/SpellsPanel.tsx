import React from 'react';

import { Typography, Row, Col, Divider } from 'antd';
import { ISpellsPanelProps } from '../../interfaces/interfaces';

const { Title, Paragraph } = Typography;

export const SpellsPanel: React.FC<ISpellsPanelProps> = (props): JSX.Element => {

	return (
		<Row gutter={{ xs: 8, sm: 16 }}>
			<Col span={24}>
				<Divider orientation="left">
					<Title level={5} style={{ marginBottom: 0 }}>{ props.title }</Title>
				</Divider>				
				{ props.spells.length > 0 ?
					<Row gutter={{ xs: 8, sm: 16 }}>
						{ props.spells.map(item => (
							<Col span={12} key={ item.index }>
								<Paragraph>{ item.name }</Paragraph>
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