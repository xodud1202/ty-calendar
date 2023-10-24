import styled from '@emotion/styled';
import React, {useState} from "react";
import {DataView} from "components/DataView";
import {ToDoInput} from "components/ToDoInput"
import {ShowInputButton} from "./components/ShowInputButton";

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #eeeeee;
`;

function App() {
	const [toDo, setToDo] = useState('');
	const [showToDoInput, setShowToDoInput] = useState(false);
	const [toDoList, setToDoList]
		= useState([
			"a. 리액트 공부하기",
			"b. Vue 공부하기",
			"c. 전부 공부하기"
	]);

	const onDelete = (todo: string) => {
		setToDoList(toDoList.filter(item => item !== todo));
	}

	const onAdd = (toDo: string) => {
		setToDoList([...toDoList, toDo]);
		setShowToDoInput(false);
	}

	return (
		<Container>
			<DataView toDoList={toDoList} onDelete={onDelete} />
			{showToDoInput && <ToDoInput onAdd={onAdd} />}
			<ShowInputButton showToDoInput={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)}/>
		</Container>
	);
}

export default App;
