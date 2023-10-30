import styled from '@emotion/styled';

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #eeeeee;
	overflow: scroll;
`;

const Header = styled.div`
	background-color: white;
	padding: 20px;
	width: calc(100% - 40px);
	margin-bottom: 20px;
`;

const Title = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
	text-align: center;
`;

function App() {
	return (
		<Container>
			<Header>
				<Title>블로그 포스트</Title>
			</Header>
		</Container>
	);
}

export default App;
