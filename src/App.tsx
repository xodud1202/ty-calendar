import { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { Label } from 'components/Label';

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	margin-bottom: 32px;
`;

const Contents = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;


function App() {
	// useState(데이터 초기값)
	// counter : 데이터 초기값이 들어갈 변수, setCounter : 데이터를 수정할 수 있는 set 함수
	const [counter, setCounter] = useState(0);

	const sub = () => {
		setCounter(counter - 1);
	}

	const add = () => {
		setCounter(counter + 1);
	}

	return (
		<Container>
			<Title>Counter App</Title>
			<Contents>
				<Button text="-" onClick={sub} />
				<Label data={counter} />
				<Button text="+" onClick={add} />
			</Contents>
		</Container>
	);
}

export default App;
