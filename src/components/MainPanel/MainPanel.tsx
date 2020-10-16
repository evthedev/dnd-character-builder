import React from 'react';

import { Layout, Typography, Row, Col } from 'antd';
import { SelectPanel } from '../SelectPanel/SelectPanel';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import { LevelsPanel } from '../LevelsPanel/LevelsPanel';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const headerStyle: any = {
	height: '150px',
	background: '#ac414d',
	backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd86b8ed-a3ab-43c6-89f7-c385bf76803c/dc6h3np-0c6952db-870a-47ec-ab8b-085f92400f3d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGQ4NmI4ZWQtYTNhYi00M2M2LTg5ZjctYzM4NWJmNzY4MDNjXC9kYzZoM25wLTBjNjk1MmRiLTg3MGEtNDdlYy1hYjhiLTA4NWY5MjQwMGYzZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.0-Uss_LWBqk8M9J0EAfFDdEESNe5NOo-UbQlF5oxTlw)',
	backgroundSize: '75%',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50% 50%',
}

export const MainPanel: React.FC = (): JSX.Element => {
	return (
		<Layout className="layout" style={{height: '100vh'}}>
			<Header style={headerStyle}>
				<Title level={2} style={{textAlign: 'center', marginTop: '10px' }}>Build your DnD Character!</Title>
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<Row gutter={{ xs: 8, sm: 16 }}>
					<Col xs={{span: 24}} lg={{span: 7}}>
						<SelectPanel />
					</Col>
					<Col xs={{span: 24}} lg={{span: 10}}>
						<InfoPanel />
					</Col>
					<Col xs={{span: 24}} lg={{span: 7}}>
						<LevelsPanel />
					</Col>
				</Row>
				
				<div className="site-layout-content">
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>DnD Character Builder ©2020 Created by EvTheDev</Footer>
		</Layout>
	)
}