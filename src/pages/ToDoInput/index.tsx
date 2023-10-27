import styled from "@emotion/styled";
import {Title} from "components/Title";
import {TextInput} from "components/TextInput";
import {Button} from "components/Button";
import React, {useContext, useState} from "react";
import {ToDoListContext} from "contexts/ToDoList";
import {useNavigate} from "react-router-dom";
import {ShowInputButton} from "../../components/ShowInputButton";

const Container = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const BackGround = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	//background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: #FFFFFF;
	padding: 32px;
	border-radius: 8px;
	z-index: 1;
`;

const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const  ToDoInput = () => {
	const navigate = useNavigate();
	const {onAdd} = useContext(ToDoListContext);
	const [toDo, setToDo] = useState('');

	const onAddToDo = () => {
		if(toDo === '') return;
		onAdd(toDo);
		setToDo("");
		navigate("/");
	}

	return (
		<Container>
			<BackGround />
			<Contents>
				<Title label={"할 일 추가"} />
				<InputContainer>
					<TextInput value={toDo} changeValue={setToDo}/>
					<Button text={"추가"} color={"#304FFE"} onClick={onAddToDo}/>
				</InputContainer>
			</Contents>
			<ShowInputButton showToDoInput={true} onClick={() => navigate("/")} />
		</Container>
	)
}
