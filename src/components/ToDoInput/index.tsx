import styled from "@emotion/styled";
import {Title} from "components/Title";
import {TextInput} from "components/TextInput";
import {Button} from "components/Button";
import React, {useState} from "react";

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
	background-color: rgb(0 0 0 / 75%);
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

interface Props {
	readonly onAdd: (toDo: string) => void;
}

export const  ToDoInput = ({onAdd}: Props) => {
	const [toDo, setToDo] = useState('');

	const onAddToDo = () => {
		if(toDo === '') return;
		onAdd(toDo);
		setToDo("");
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
		</Container>
	)
}
